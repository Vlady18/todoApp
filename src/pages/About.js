import React from 'react'

export const About=()=>{
    return(
        <div className="container">
            <div className="jumbotron mt-5">
                <h1 className="display-4">Привет, ты зарегестрированый пользователь!</h1>
                <p className="lead">В процессе разработки функционала приложения тебе будет доступен весь полезный контент</p>
                <hr className="my-4" />
                    <p>Использются служебные классы для типографики и расстояния содержимого в контейнере большего
                        размера.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg">Learn more</a>
                    </p>
            </div>
        </div>
    )
}