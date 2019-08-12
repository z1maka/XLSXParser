import React from 'react'
import server from './img/server.png'


const _DATA = [];
const notFoundIP = [];
export default class NewSheet extends React.Component {
    state = {
        filterValue: '',
        data: [],
        notFoundIP: [],
        sort: false,
        repeatIp: [],
    };

    async componentDidMount() {
        const invoices =  this.props.invoice.ips
        invoices.map(ip=>{
            if (this.props.sheet[ip]){
                const item = {
                    server: ip,
                    name: this.props.sheet[ip].name  ? this.props.sheet[ip].name : null,
                    coast: this.props.sheet[ip].coast  ? this.props.sheet[ip].coast : null,
                }
                _DATA.push(item)
            }
            if (!this.props.sheet[ip]){
                notFoundIP.push(ip)
            }
        })
        this.setState({data: _DATA, notFoundIP, repeatIp : this.props.invoice.repeatingIps})
    }


    showContent = () => {
        return this.state.data.map((invoice, index) => {
            return (
                <div key={invoice.server} className='sheet-item'>
                    <div className='sheet-server'>
                        <p className='index'>{`${index+1}`}</p>
                        <p className='sheet-server-value'>{invoice.server}</p>
                    </div>
                    <div className='sheet-server-name'>
                        <p className='sheet-server-value'>{invoice.name}</p>
                    </div>
                    <div className='sheet-server-name'>
                        <p className='sheet-server-value'>{
                            invoice.coast ? invoice.coast : 'Not found'
                        }</p>
                    </div>

                </div>
            )
        })
    };

    handleChange = (e) => {
        const _data = _DATA.filter(ip => {
            return ip.server.includes(e.target.value)
        });
        this.setState({
            data: _data
        })
    };

    showRepitedInvoice = () => {
        return this.state.repeatIp.map(invoice => {
            return (
                <div key={invoice} className='sheet-item'>
                    <div className='sheet-server'>
                        <img className='sheet-server-img' src={server} alt="icon"/>
                        <p className='sheet-server-value'>{invoice}</p>
                    </div>
                </div>
            )
        })
    }

    showNotFound = () => {
        return this.state.notFoundIP.map(invoice => {
            return (
                <div key={invoice} className='sheet-item'>
                    <div className='sheet-server'>
                        <img className='sheet-server-img' src={server} alt="icon"/>
                        <p className='sheet-server-value'>{invoice}</p>
                    </div>
                </div>
            )
        })
    }

    handleSortClick = () =>{
        if (!this.state.sort){
            const _data = _DATA.sort((a, b)=>{
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0
            });
            this.setState({data: _data, sort: true});
        }else{
            const data = [];
            this.props.invoice.ips.map(ip=>{
                if (this.props.sheet[ip]){
                    const item = {
                        server: ip,
                        name: this.props.sheet[ip].name  ? this.props.sheet[ip].name : null,
                        coast: this.props.sheet[ip].coast  ? this.props.sheet[ip].coast : null,
                    }
                    data.push(item)
                }
                this.setState({data, sort: false})
            })
        }
    };



    render() {
        const {notFoundIP, repeatIp, data} = this.state;
        return (
            <div className='container'>
                <h2 className='container-header'>Real Sheet</h2>
                <h4>{`Количество найденных серверов в Табличке ${this.state.data.length}`}</h4>
                {<div className='ipsMenu'>
                    <div className='repeting-ips'>
                        <h2 className='show-repeating'>Repeating IP in Invoice</h2>
                        {repeatIp.length && this.showRepitedInvoice()}
                    </div>
                    <div className='not-found-ips'>
                        <h2 className='show-repeating'>Not Found IP from Invoice</h2>
                        {notFoundIP.length && this.showNotFound()}
                    </div>
                </div>}
                <div className='filter-section'>
                    <label className='filter-label' htmlFor='filter'>Filter by IP</label>
                    <input
                        className='fileInput'
                        onChange={this.handleChange}
                        id='filter'
                        placeholder='enter the Ip'
                        type="text"
                    />
                    <button onClick={this.handleSortClick} className='sort'>Sort by Name</button>
                </div>
                <div className='sheet-container'>
                    <h2>Invoices</h2>
                    {data && this.showContent()}
                </div>

            </div>
        )
    }
}