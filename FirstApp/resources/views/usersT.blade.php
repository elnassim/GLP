<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>laravel crud</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
    <div class="cantainer">
        <div class="card">
            <div class="card-header">
                laravel crud
                <a href="/add/user" class="btn btn-success btn-sm float-end">ADD NEW</a>
            </div>
            <div class="card-body">
                <table class="table table-sm table-striped table-bordered">
                    <thead>
                        <th>S/n</th>
                        <th>full name</th>
                        <th>Email</th>
                        <th>password</th>
                    </thead>
                    <tbody>
                        @if (count($all_users)>0)
                        @foreach ($all_users as $item)
                            <tr>
                                <td>{{$item->id}}</td>
                                <td>{{$item->name}}</td>
                                <td>{{$item->email}}</td>
                                <td>{{$item->password}}</td>
                            </tr> 
                        @endforeach
                               
                        @else
                            <tr>
                                <td>
                                    No user found
                                </td>
                            </tr>
                    
                        @endif
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>
</html>