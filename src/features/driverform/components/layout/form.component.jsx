import React from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import './form.component.scss'
import {
  UIbutton,
  UIinput
} from '../../../../ui';

function FormComponent(props) {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <div className="fields">
        <div className="row">
          <UIinput name="firstName" value={props.firstName} label="Nombre" onChange={props.handleChange}></UIinput>
          <span className="space-between" />
          <UIinput name="lastName" value={props.lastName} label="Apellido" onChange={props.handleChange}></UIinput>
        </div>
        <div className="row">
          <UIinput name="email" type="email" value={props.email} label="Email" onChange={props.handleChange}></UIinput>
          <span className="space-between" />
          <UIinput name="cellphone" value={props.cellphone} label="Celular" onChange={props.handleChange}></UIinput>
        </div>
        <div className="row">
          <UIinput name="birthDate" value={props.birthDate} label="Fecha de nacimiento" placeholder="YYYY-MM-DD" onChange={props.handleChange}></UIinput>
          <span className="space-between" />
          <UIinput name="address" value={props.address} label="Direccion" onChange={props.handleChange}></UIinput>
        </div>
        <div className="row">
          <UIinput name="password" type="password" value={props.password} label="Contraseña" onChange={props.handleChange}></UIinput>
          <span className="space-between" />
          <UIinput name="password2" type="password" value={props.password2} label="Confirma contraseña" onChange={props.handleChange}></UIinput>
        </div>
        <div className="row">
          <UIinput name="bankAccount" value={props.bankAccount} label="Inserta tu tarjeta bancaria" onChange={props.handleChange}></UIinput>
          <span className="space-between"></span>
          <UIinput name="dni" value={props.dni} label="Inserta tu DNI" onChange={props.handleChange}></UIinput>
        </div>
        <div className="row photo">
          <input className="upload-input"
            name="userPhoto"
            value={props.userPhoto}
            accept="image/*"
            id="contained-button-file-user"
            multiple
            type="file"
            onChange={props.handleChange}
          />
          <label htmlFor="contained-button-file-user" className="upload-button">
            <UIbutton variant="contained" component="span" fullWidth={true}>
              Sube una foto tuya &nbsp;
            <CloudUploadIcon />
            </UIbutton>
          </label>
        </div>

        <div className="row">
          <UIinput name="licensePlate" value={props.licensePlate} label="Placa del vehiculo" onChange={props.handleChange}></UIinput>
          <span className="space-between" />
          <UIinput name="cargoVolume" value={props.cargoVolume} label="Volumen max. de tu vehiculo" onChange={props.handleChange}></UIinput>
        </div>
        <div className="row">
          <UIinput name="brand" value={props.brand} label="Marca y año del vehiculo" onChange={props.handleChange}></UIinput>
          <span className="space-between" />
          <UIinput name="color" value={props.color} label="Color del vehiculo" onChange={props.handleChange}></UIinput>
        </div>
        <div className="row photo">
          <input className="upload-input"
            name="vehiclePhoto"
            value={props.vehiclePhoto}
            accept="image/*"
            id="contained-button-file-vehicle"
            multiple
            type="file"
            onChange={props.handleChange}
          />
          <label htmlFor="contained-button-file-vehicle" className="upload-button">
            <UIbutton variant="contained" component="span" fullWidth={true}>
              Sube una foto de tu vehiculo &nbsp;
            <CloudUploadIcon />
            </UIbutton>
          </label>
        </div>
      </div>
      <UIbutton className="register-component-btn register-driver-btn" name="button" type="submit" variant="contained" color="primary" fullWidth={true}>R E G I S T R A T E</UIbutton>

    </form>
  );
}

export {
  FormComponent
}
