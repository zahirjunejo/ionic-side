class Musician
{
    constructor(name, email, username, dob, password){
    	this._name = name;
    	this._email = email;
    	this._username = username;
    	this._dob = dob;
    	this._password = password;
    }


    get name(){
    	return this._name;
    }

    set name(name){
    	return this._name = name;
    }

    get email(){
    	return this._email;
    }

    set email(email){
    	return this._email = email;
    }

    get username(){
    	return this._username;
    }

    set username(username){
    	return this._username = username;
    }

    get dob(){
    	return this._dob;
    }

    set dob(dob){
    	return this._dob = dob;
    }

    get password(){
    	return this._password;
    }

    set password(password){
    	return this._password = password;
    }


}