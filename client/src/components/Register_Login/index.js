import React from 'react';
import MyButton from '../utils/button';
import Login from './login';

const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customer</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <MyButton
              type="default"
              title="Create an account"
              linkTo="/register"
              addStyle={{
                margin: '10px 0 0 0'
              }}
            />
          </div>

          <div className="right">
            <h2>Registerd customer</h2>
            <p>If you have a account please login</p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
