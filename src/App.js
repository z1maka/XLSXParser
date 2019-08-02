import React from 'react';
import './App.css';
import bounce from './img/bounce.png'
import xl from 'xlsx';
import NewSheet from "./newSheat";
import {PulseLoader} from 'react-spinners'

class App extends React.Component {

    state = {
        invoice: {},
        sheet: {},
        invoiceIps: null,
        sheets: null,
        error: null,
        loading: false,
    };

    handleChange = (event) => {
        console.log(event.target.name);
        this.setState({
            [event.target.name]: event.target.files[0]
        })
    };

    parceInvice = (file) =>{
        const ips = [];
        const repeatingIps = [];
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = (e) =>{
            const workbook = xl.read(e.target.result,{type: "buffer"});
            const name = workbook.SheetNames[0];
            const invoiceSheet = workbook.Sheets[name];
            const sheetValues = xl.utils.sheet_to_json(invoiceSheet, {header: 1});
            for(const key in sheetValues){
                if (sheetValues[key][4] && sheetValues[key][4].indexOf('(') > -1) {
                    const ip = sheetValues[key][4].split('(')[1].split(')')[0];
                    if (ips.includes(ip)) {
                        ips.filter(i=> i !== ip);
                        repeatingIps.push(ip)
                    } else {
                        ips.push(ip)
                    }
                }
            }
            this.setState({invoiceIps: {ips, repeatingIps}})
        };
    };

    parceSheet = (file) => {
        const ips = {};
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = async (e) =>{
            const workbook = await xl.read(e.target.result,{type: "buffer"});
            const names = workbook.SheetNames;
            const sheetsValues = [];
            for (const name of names){
                sheetsValues.push(workbook.Sheets[name])
            }
            const result = []
            for (const sheet of sheetsValues) {
                result.push(xl.utils.sheet_to_json(sheet, {header: 1}));
            }
            for (const key in result){
                for(const f in result[key]){
                    ips[result[key][f][2]] = {coast: result[key][f][8], name: result[key][f][0]};
                }
            }
            this.setState({sheets: ips})
        }
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading : true})
        const invoiceData = await  this.parceInvice(this.state.invoice);
        const sheetData = await  this.parceSheet(this.state.sheet);
        await this.setState({loading : false})
    };

    render() {
        console.log(this.state)
        const InputField = ({state, label, id, name}) => {
            return (
                <div className='upload-section'>
                    <label className='upload' htmlFor={id}>{label}</label>
                    <input
                        className='fileInput'
                        style={{display: 'none'}}
                        onChange={this.handleChange}
                        id={id}
                        name={name}
                        multiple
                        type="file"
                    />
                    {state.name &&
                    <div className='invoice-description'>
                        <img className='uploadImage' src={bounce} alt="bounce"/>
                        <p className='name-file'>{state.name}</p>
                    </div>
                    }
                </div>
            )
        };

        console.log(this.state)
        return (
            <div className="App">
                <form className='formLoad'>
                    <InputField
                        state={this.state.invoice}
                        label='Upload the Invoice here'
                        name='invoice'
                        id='raised-button-invoice'/>
                    <InputField
                        state={this.state.sheet}
                        label='Upload the Sheet here'
                        name='sheet'
                        id='raised-button-file'/>
                </form>
                <button className='myButton' onClick={this.handleSubmit}>Show Result</button>
                {this.state.loading && <PulseLoader
                    css={{
                        display: 'block',
                        margin:' 0 auto',
                        borderColor: 'red',
                    }}
                    sizeUnit={"px"}
                    size={20}
                    color={'aquamarine'}
                    loading={this.state.loading}

                />}
                {this.state.sheets && !this.state.loading && <NewSheet sheet={this.state.sheets} invoice={this.state.invoiceIps}/>   }
            </div>
        );
    }
}

export default App;
