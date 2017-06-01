import React from 'react';
export  default class Register extends React.Component{
  mixins: [ History ];
   registrationSubmit (e) {

   this.props.router.push('', '/');
   }
  render(){
    return(
      <div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="registrationForm">
                <form className="Form-horizontal" onSubmit={this.registrationSubmit.bind(this)}>
                    <fieldset>
                        <legend>Registration Form <i className="fa fa-pencil pull-right"></i></legend>
                        <div className="form-group">
                            <label htmlFor="inputText" className="col-lg-2 control-label">
                                Username</label>
                            <div className="col-lg-10">
                                <input type="text" className="form-control" id="inputUsername" placeholder="Username" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail" className="col-lg-2 control-label">
                                Email</label>
                            <div className="col-lg-10">
                                <input type="text" className="form-control" id="inputEmail" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword" className="col-lg-2 control-label">
                                Password</label>
                            <div className="col-lg-10">
                                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />

                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword" className="col-lg-2 control-label">
                                Confirm Password</label>
                            <div className="col-lg-10">
                                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />

                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-lg-10 col-lg-offset-2">

                                <button type="submit" className="btn btn-primary">
                                    Submit</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
             </div>

    </div>
</div>
  );
  }
}
