import React, {useState} from 'react';
import './Promotion.css';


const Promotion = () => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit(){
        localStorage.setItem('user', user);
        localStorage.setItem('email', email);
    }

    return (
        <>
            <section className="register">
                <div className="overlay2">
                    <h1>Submit to Receive our Offers!</h1>
                    <form>
                        <input type="text" name="user" placeholder="Name" value={user} onChange={e => setUser(e.target.value)}/>
                        <input type="text" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                        <input type="submit" value="Submit" onClick={handleSubmit}/>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Promotion;
