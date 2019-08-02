import React from 'react'
import server from './img/server.png'

export default class NewSheet extends React.Component {
    state = {
        filterValue: '',
        invoices: this.props.invoice.ips,
        show: false
    }

    showContent = () => {
        return this.state.invoices.map((invoice, index) => {
            return (
                <div key={invoice} className='sheet-item'>
                    <div className='sheet-server'>
                        <p className='index'>{`${index+1}`}</p>
                        <p className='sheet-server-value'>{invoice}</p>
                    </div>
                    {
                        this.props.sheet[invoice] ? (
                            <>
                                <div className='sheet-server-name'>
                                    <p className='sheet-server-value'>{
                                        this.props.sheet[invoice].name ? this.props.sheet[invoice].name : 'Not found'
                                    }</p>
                                </div>
                                <div className='sheet-server-name'>
                                    <p className='sheet-server-value'>{
                                        this.props.sheet[invoice].coast ? this.props.sheet[invoice].coast : 'Not found'
                                    }</p>
                                </div>
                            </>
                        ) : <div className='sheet-server-name'><p className='error'></p>Invoice not found in sheet File</div>
                    }

                </div>
            )
        })
    }

    handleChange = (e) => {
        const data = this.props.invoice.ips.filter(ip => {
            return ip.includes(e.target.value)
        });
        this.setState({
            invoices: data
        })
    };

    showRepitedInvoice = () => {
        return this.props.invoice.repeatingIps.map(invoice => {
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
        console.log('sort')
    }



    render() {
        return (
            <div className='container'>
                <h2 className='container-header'>Real Sheet</h2>
                <h4>{`Количество инвойсов ${this.props.invoice.ips.length}`}</h4>
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
                {this.props.invoice.repeatingIps.length && <h2 className='show-repeating' onClick={()=>this.setState({show: !this.state.show})}>Repeating Invoices</h2>}
                {this.state.show && <div className='repeting-ips'>
                    {this.showRepitedInvoice()}
                </div>}
                <div className='sheet-container'>
                    <h2>Invoices</h2>
                    {this.showContent()}
                </div>

            </div>
        )
    }
}