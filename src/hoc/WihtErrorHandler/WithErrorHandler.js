import React, { Component } from 'react'
// import axios from '../../axios-orders'

import Aux from '../Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrapComponent, axios) => {
    return class extends Component{
        state = {
            error: null
        }

        componentWillMount () {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req
            })

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            })
        }

        componentWillUnmount () {
            console.log('WillUnmount', this.reqInterceptor, this.resInterceptor)
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }

        errorConfirmedHandler = () =>{
            this.setState({error: null})
        }

        render () {
            return(
                <Aux>
                    <Modal 
                        style = {{textAlign : 'center'}}
                        show = {this.state.error}
                        clicked = {this.errorConfirmedHandler}>
                       {this.state.error ? this.state.error.massage : null}
                       Network error
                    </Modal>
                    <WrapComponent {...this.props}/>
                </Aux>
            )
        }
    } 
}

export default withErrorHandler