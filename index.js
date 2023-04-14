function validate()
{
    var username = document.getElementById('username').value 
    var email = document.getElementById('email').value
    var password = document.getElementById( 'password').value
    var cpassword = document.getElementById('cpassword').value

  checkusername(username)
  checkemail(email)
  checkpassword(email)
  checkpasswordmatch(passwor,cpassword)
}

function checkusername(username)
{

   if(username.length > 7)
    {
         Document.getElementById('username').classlist.add('success')
         Document.getElementById('username').classlist.replace('error' , 'success')
         Document.getElementById('username_error').innerhtml=''
    }

    else{

        document.getElementById('username').classlist.add('error')
        Document.getElementById('username_error').innerhtml='username must be 8 letters long '
    }
}

function checkemail(email)
{

   if(email.length > 8 && email.include('@gmail'))
    {
         Document.getElementById('email').classlist.add('success')
         Document.getElementById('email').classlist.replace('error' , 'success')
         Document.getElementById('email_error').innerhtml=''
    }

    else{

        document.getElementById('email').classlist.add('error')
        Document.getElementById('email_error').innerhtml='email must include @gmail,8letters long'
    }
}

function checkemail(password)
{

   if(password.length > 8 &&password.include('.'))
    {
         Document.getElementById('password').classlist.add('success')
         Document.getElementById('password').classlist.replace('error' , 'success')
         Document.getElementById('password_error').innerhtml=''
    }

    else{

     document.getElementById('password').classlist.add('error')
     Document.getElementById('password_error').innerhtml='password must be 8 letters long  and sholud include . '
    }
}
function checkpasswordmatch(password , cpassword )
{
    if(password==cpassword && password!='')
    {
        Document.getElementById('cpassword').classlist.add('success')
         Document.getElementById('cpassword').classlist.replace('error' , 'success')
         Document.getElementById('cpassword_error').innerhtml=''
    }
    else{
        document.getElementById('cpassword').classlist.add('error')
        Document.getElementById('cpassword_error').innerhtml='password not matched' 
    }
}