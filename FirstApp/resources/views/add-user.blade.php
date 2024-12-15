<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Add New User</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

</head>
<body>
    <div class="container">
        <div class="card">
            <div class="card-header">Add new user </div>
            <div class="card-body">
                <form action="{{route('AddUser')}}" method="post"><div class="mb-3">
                    @csrf
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">name</label>
                        <input type="text" name="name" class="form-control" id="formGroupExampleInput" placeholder="enter name">
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label">Email</label>
                        <input type="email" name="email" class="form-control" id="formGroupExampleInput2" placeholder="enter email">
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label">password</label>
                        <input type="password" name="password" class="form-control" id="formGroupExampleInput2" placeholder="enter password">
                    </div>

                    <button type="submit" class="btn btn-primary">Save</button>
                </form>
                
        </div>
    </div>
</body>
</html>