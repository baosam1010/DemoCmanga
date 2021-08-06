import React, { useEffect } from 'react';

// import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";


Form.propTypes = {

};

function onCloseForm(e) {
    e.preventDefault();
    document.getElementById('login-signup').style.display = 'none';

};

// function onSubmitForm(e) {
//     e.preventDefault();
//     console.log("Submitform");

// }

function Form(props) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        criteriaMode: "all"
    });
    const onSubmit1 = (data,e) => {
        console.log(data.SyntheticBaseEvent,e);
        return false;

    };
    const onSubmit2 = (data,e) => {
        console.log(data,e);
    
    };
    useEffect(() => {
        const result = fetch('./api/formValues.json');
        reset(result);
    }, [reset])
    
    
    return (
        <div id="login-signup">
            {/*Form đămg ký  */}
            <form id="form-1" className="col l-4 " onSubmit={handleSubmit(onSubmit1)} >
                <h2 id="form-1-heading" >Đăng Ký Mới </h2>
                <ul id="module-list">
                    <li className="module-item">
                        <p className="user-name">Tên đăng nhập</p>
                        {/* <input {...register("name", { required: "Vui lòng nhập tại đây.", minLength: 6 })} className="input-user-name" type="text" placeholder="Vui lòng nhập tên đăng nhập" /> */}
                        <input {...register("name", {
                            required: "Vui lòng nhập tại đây.",
                            minLength: {
                                value: 6,
                                message: "Nhập tối thiểu 6 ký tự"
                            }
                        })}
                            className="input-user-name" placeholder="Vui lòng nhập tên đăng nhập"
                        />
                        <ErrorMessage
                            errors={errors}
                            name="name"
                            render={({ messages }) => {
                                console.log("messages1", messages);
                                return messages
                                    ? Object.entries(messages).map(([type, message]) => (
                                        <p style={{ color: "red" }} key={type}>{message}</p>
                                    ))
                                    : null;
                            }}
                        />


                    </li>
                    <li className="module-item">
                        <p className="user-password">Mật khẩu</p>
                        {/* <input {...register("password", { pattern: /^[A-Za-z]+$/i }, { required: true, minLength: 8 })} className="input-user-password"  placeholder="Vui lòng nhập mật khẩu" /> */}
                        <input {...register("password", {
                            required: "Vui lòng nhập tại đây.",
                            minLength: {
                                value: 8,
                                message: "Nhập tối thiểu 8 ký tự"
                            }
                        })}
                            className="input-user-name" type="password" placeholder="Vui lòng nhập tên đăng nhập"
                        />
                        <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({ messages }) => {
                                console.log("messages2", messages);
                                return messages
                                    ? Object.entries(messages).map(([type, message]) => (
                                        <p style={{ color: "red" }} key={type}>{message}</p>
                                    ))
                                    : null;
                            }}
                        />
                    </li>
                    <li id="module-repeat-pass" className="module-item">
                        <p className="rep-user-password">Nhập lại mật khẩu</p>
                        {/* <input {...register("re_password", { pattern: /^[A-Za-z]+$/i }, { required: true })} className="input-rep-user-password" placeholder="Vui lòng nhập lại mật khẩu" /> */}
                        <input {...register("re_password", {
                            required: "Vui lòng nhập kiểm tra lại mật khẩu.",
                        })}
                            className="input-user-name" type="password" placeholder="Vui lòng nhập tên đăng nhập"
                        />
                        <ErrorMessage
                            errors={errors}
                            name="re_password"
                            render={({ messages }) => {
                                console.log("messages3", messages);
                                return messages
                                    ? Object.entries(messages).map(([type, message]) => (
                                        <p style={{ color: "red" }} key={type}>{message}</p>
                                    ))
                                    : null;
                            }}
                        />
                    </li>
                </ul>               
                <div className="btn-form">
                    <button type="submit" id="btn-register" className="btn-common">Đăng Ký</button>
                    <button onClick={onCloseForm} className="btn-close">Hủy</button>
                </div>
            </form>

        {/*---------------Form Đăng nhập-------------------  */}
            <form id="form-2" className="col l-4 " onSubmit={handleSubmit(onSubmit2)}>
                <h2 id="form-2-heading" >Đăng Nhập </h2>

                <ul id="module-list">
                    <li className="module-item">
                        <p className="user-name">Tên đăng nhập</p>
                        {/* <input {...register("name", { required: "Vui lòng nhập tại đây.", minLength: 6 })} className="input-user-name" type="text" placeholder="Vui lòng nhập tên đăng nhập" /> */}
                        <input {...register("name2", {
                            required: "Vui lòng nhập tại đây.",
                            minLength: {
                                value: 6,
                                message: "Nhập tối thiểu 6 ký tự"
                            }
                        })}
                            className="input-user-name" placeholder="Vui lòng nhập tên đăng nhập"
                        />
                        <ErrorMessage
                            errors={errors}
                            name="name2"
                            render={({ messages }) => {
                                console.log("messages1", messages);
                                return messages
                                    ? Object.entries(messages).map(([type, message]) => (
                                        <p style={{ color: "red" }} key={type}>{message}</p>
                                    ))
                                    : null;
                            }}
                        />
                    </li>
                    <li className="module-item">
                        <p className="user-password">Mật khẩu</p>
                        {/* <input {...register("password", { pattern: /^[A-Za-z]+$/i }, { required: true, minLength: 8 })} className="input-user-password"  placeholder="Vui lòng nhập mật khẩu" /> */}
                        <input {...register("password2", {
                            required: "Vui lòng nhập tại đây.",
                            minLength: {
                                value: 8,
                                message: "Nhập tối thiểu 8 ký tự"
                            }
                        })}
                            className="input-user-name" type="password" placeholder="Vui lòng nhập tên đăng nhập"
                        />
                        <ErrorMessage
                            errors={errors}
                            name="password2"
                            render={({ messages }) => {
                                console.log("messages2", messages);
                                return messages
                                    ? Object.entries(messages).map(([type, message]) => (
                                        <p style={{ color: "red" }} key={type}>{message}</p>
                                    ))
                                    : null;
                            }}
                        />
                    </li>    
                </ul>
                <div className="btn-form">
                    <button 
                        type="submit" 
                        id="btn-logup" className="btn-common">Đăng nhập
                    </button>
                    <button onClick={onCloseForm} className="btn-close">Hủy</button>
                </div>
            </form>        
        </div>
    );
}

export default Form;
