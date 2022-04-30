import React, { useEffect, useState } from 'react'
import Textarea from '../../UI/Textarea'
import { Formik } from 'formik'
import * as yup from 'yup'
import { IUserProfile } from '../../types/types'

interface FormModal {
    name: string
    username: string
    email: string
    street: string
    city: string
    code: number | string
    phone: number | string
    website: string
}

interface ProfileProps {
    user: IUserProfile
}

interface Edit {
    readOnly: boolean
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
    
    const [edit, setEdit] = useState<Edit>({ readOnly: true })

    const editClick = () => {
        setEdit({readOnly: !true})
    }

    const validationSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        username: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        email: yup.string().email('Введите корректный email').required('Обязательное поле'),
        street: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        city: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        code: yup.number().typeError('Должно быть только число').required('Обязательное поле'),
        phone: yup.number().typeError('Должно быть только число').required('Обязательное поле'),
        website: yup.string().typeError('Должно быть строкой').required('Обязательное поле')
    })

    return (
        <div className="profile-user">
            <div className="profile-user__inner">
                <div className="profile-user__header">
                    <h5 className="profile-user__title">Профиль пользователя</h5>
                    <button onClick={editClick} className="button">Редактировать</button>
                </div>
                <div className="profile-user__box">
                    <Formik<FormModal>
                        initialValues={{
                            name: user.name,
                            username: user.username,
                            email: user.email,
                            street: user.address.street,
                            city: user.address.city,
                            code: user.address.zipcode,
                            phone: user.phone,
                            website: user.website,
                        }}
                        validateOnBlur
                        onSubmit={(values) => console.log(values)}
                        validationSchema={validationSchema}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                            <form onSubmit={handleSubmit} className="profile-user__form">

                                {/* <label htmlFor={`name`}>Имя</label> */}
                                <div className="profile-user__input">
                                    <input
                                        className={touched.name && errors.name ? "error" : "input"}
                                        placeholder="Иван Иванов"
                                        type="text"
                                        name={`name`}
                                        readOnly={edit.readOnly}
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.name && errors.name && <p className="error__text">{errors.name}</p>}
                                </div>

                                <div className="profile-user__input">
                                    <input className={touched.username && errors.username ? "error" : "input"}
                                        placeholder="Иван" type="text"
                                        value={values.username}
                                        name={`username`}
                                        readOnly={edit.readOnly}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.username && errors.username && <p className="error__text">{errors.username}</p>}
                                </div>

                                <div className="profile-user__input">
                                    <input className={touched.email && errors.email ? "error" : "input"}
                                        placeholder="example@mail.com" type="email"
                                        value={values.email}
                                        name={`email`}
                                        readOnly={edit.readOnly}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.email && errors.email && <p className="error__text">{errors.email}</p>}
                                </div>

                                <div className="profile-user__input">
                                    <input className={touched.street && errors.street ? "error" : "input"}
                                        placeholder="ул. Пример" type="text"
                                        value={values.street}
                                        name={`street`}
                                        readOnly={edit.readOnly}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.street && errors.street && <p className="error__text">{errors.street}</p>}
                                </div>

                                <div className="profile-user__input">
                                    <input className={touched.city && errors.city ? "error" : "input"}
                                        placeholder="Москва" type="text"
                                        value={values.city}
                                        name={`city`}
                                        readOnly={edit.readOnly}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.city && errors.city && <p className="error__text">{errors.city}</p>}
                                </div>

                                <div className="profile-user__input">
                                    <input className={touched.code && errors.code ? "error" : "input"}
                                        placeholder="1234234" type="text"
                                        value={values.code}
                                        name={`code`}
                                        readOnly={edit.readOnly}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.code && errors.code && <p className="error__text">{errors.code}</p>}
                                </div>

                                <div className="profile-user__input">
                                    <input className={touched.phone && errors.phone ? "error" : "input"}
                                        placeholder="89991112233" type="text"
                                        value={values.phone}
                                        name={`phone`}
                                        readOnly={edit.readOnly}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.phone && errors.phone && <p className="error__text">{errors.phone}</p>}
                                </div>

                                <div className="profile-user__input">
                                    <input className={touched.website && errors.website ? "error" : "input"}
                                        placeholder="www.example.com" type="text"
                                        value={values.website}
                                        name={`website`}
                                        readOnly={edit.readOnly}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.website && errors.website && <p className="error__text">{errors.website}</p>}
                                </div>
                                <Textarea />
                                <button type="submit" className={!isValid && !dirty ? 'button-profile__disabled' : 'button-profile'}
                                    disabled={!isValid && !dirty}>Отправить</button>
                            </form>
                        )}
                    </Formik>
                </div>

            </div>
        </div>
    )
}

export default Profile