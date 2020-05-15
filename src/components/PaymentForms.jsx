import React, { Component } from 'react';

export default class PaymentForms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      cpf: '',
      email: '',
      telefone: '',
      cep: '',
      endereço: '',
      complemento: '',
      numero: '',
      cidade: '',
      estado: '',
    };
  }

  renderNome() {
    const { nome } = this.state;
    return (
      <label htmlFor="input">
        Nome
        <input type="text" value={nome} onChange={(e) => this.setState({ nome: e.target.value })} />
      </label>
    );
  }

  renderCPF() {
    const { cpf } = this.state;
    return (
      <label htmlFor="input">
        CPF
        <input type="number" value={cpf} onChange={(e) => this.setState({ cpf: e.target.value })} />
      </label>
    );
  }

  renderEmail() {
    const { email } = this.state;
    return (
      <label htmlFor="input">
        Email
        <input type="email" value={email} onChange={(e) => this.setState({ email: e.target.value })} />
      </label>
    );
  }

  renderTelefone() {
    const { telefone } = this.state;
    return (
      <label htmlFor="input">
        Telefone
        <input type="number" value={telefone} onChange={(e) => this.setState({ telefone: e.target.value })} />
      </label>
    );
  }

  renderCEP() {
    const { cep } = this.state;
    return (
      <label htmlFor="input">
        CEP
        <input type="number" value={cep} onChange={(e) => this.setState({ cep: e.target.value })} />
      </label>
    );
  }

  renderEndereço() {
    const { endereço } = this.state;
    return (
      <label htmlFor="input">
        Endereço
        <input type="text" value={endereço} onChange={(e) => this.setState({ endereço: e.target.value })} />
      </label>
    );
  }

  renderComplemento() {
    const { complemento } = this.state;
    return (
      <label htmlFor="input">
        Complemento
        <input type="text" value={complemento} onChange={(e) => this.setState({ complemento: e.target.value })} />
      </label>
    );
  }

  renderNumero() {
    const { numero } = this.state;
    return (
      <label htmlFor="input">
        Número
        <input type="number" value={numero} onChange={(e) => this.setState({ numero: e.target.value })} />
      </label>
    );
  }

  renderCidade() {
    const { cidade } = this.state;
    return (
      <label htmlFor="input">
        Cidade
        <input type="text" value={cidade} onChange={(e) => this.setState({ cidade: e.target.value })} />
      </label>
    );
  }

  renderEstado() {
    const { estado } = this.state;
    return (
      <label htmlFor="input">
        Estado
        <input type="text" value={estado} onChange={(e) => this.setState({ estado: e.target.value })} />
      </label>
    );
  }


  render() {
    return (
      <div className="payment-form">
        <p>Informações do Comprador</p>
        {this.renderNome()}
        {this.renderCPF()}
        {this.renderEmail()}
        {this.renderTelefone()}
        {this.renderCEP()}
        {this.renderEndereço()}
        {this.renderComplemento()}
        {this.renderNumero()}
        {this.renderCidade()}
        {this.renderEstado()}


      </div>
    );
  }
}
