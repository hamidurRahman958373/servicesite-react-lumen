<html>
<head>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <link rel="stylesheet" href="{{asset('css/responsive.css')}}">
</head>
<body>
<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="col-md-6 text-center mt-5">
            <div class="card">
                <div class="card-body">
                    <h3 class="">Admin Login</h3><hr>
                    <input id="userName" class="form-control" type="text" placeholder="User Name"></br>
                    <input id="password" class="form-control" type="password" placeholder="User Password"></br>
                    <button id="loginBtn" onclick="Adminlogin()" class="btn btn-primary btn-block " type="submit" >Login</button></br>
                </div>
            </div>
        </div>
    </div>

</div>

<script type="text/javascript">
    function Adminlogin(){
         var userName = document.getElementById('userName').value;
         var password = document.getElementById('password').value;

         var xhttp = new XMLHttpRequest();

         xhttp.onreadystatechange=function (){
             if (this.readyState==4 && this.status==200){
                 if (this.response=='1'){
                     window.location.href='/';
                 }
                 else {
                     alert("User Name and password Not Found . Login Fail!!!!");
                 }
             }
         }
         xhttp.open('GET','/onLogin/'+userName+'/'+password,true);
         xhttp.send();

    }

</script>


</body>
</html>
