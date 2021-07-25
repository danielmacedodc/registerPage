import React, {useState} from 'react';
import './Register.css';

function Register() {

    var id = 0;

    const [user, setUser] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [cep, setCep] = useState('');
    const [phone, setPhone] = useState('');

    const [destination, setDestination] = useState('');
    const [price, setPrice] = useState('');



    function handleSubmitUser(){
        localStorage.setItem('user', user);
        localStorage.setItem('email', email);
        localStorage.setItem('cpf', cpf);
        localStorage.setItem('adress', adress);
        localStorage.setItem('cep', cep);
        localStorage.setItem('phone', phone);
    }

    function handleSubmitProduct(){
        localStorage.setItem('id', id);
        localStorage.setItem('destination', destination);
        localStorage.setItem('price', price);
        id++;       
    }


    return (
        <>
            <section className="registerUser">
                <h1>User Register</h1>
                    <div>
                        <form className="overlay3">
                            Submit Here
                            <input type="text" name="user" placeholder="Name" value={user} onChange={e => setUser(e.target.value)}/>
                            <input type="text" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                            <input type="text" name="cpf" placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)}/>
                            <input type="text" name="adress" placeholder="Adress" value={adress} onChange={e => setAdress(e.target.value)}/>
                            <input type="text" name="cep" placeholder="CEP" value={cep} onChange={e => setCep(e.target.value)}/>
                            <input type="text" name="phone" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)}/>
                            <input type="submit" value="Submit" onClick={handleSubmitUser}/>
                        </form>
                    </div>
            </section>
            <section className="registerUser">
                <h1>Destination Register</h1>
                <div>
                    <form className="overlay3">
                        Submit Here
                        <input type="text" name="destination" placeholder="Destionation" value={destination} onChange={e => setDestination(e.target.value)}/>
                        <input type="text" name="price" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)}/>
                        <input type="submit" value="Submit" onClick={handleSubmitProduct}/>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Register
