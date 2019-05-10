// api tokens from git aphiip
// const client_id = "Iv1.00b1481dda1fa49a";
// const client_secret = "0c6ce8a30bf3b390191ec34c2df53f492d752af8";
const showData = async (user) => {
    const url = "https://api.github.com/users/" + user + "/repos";
    const api = await fetch(url);
    const data = await api.json();
    return {
        data: data
    }
}
const showRepos = (user) => {
    showData(user).then((res) => {
        console.log(res.data)
        for (let i in res.data) {
            $('#repo_list')
                .append(
                    $('<li>').attr('class', "list-group-item my-2")
                        .append('<p id=name> Repository : ' + res.data[i].name + '</p>')
                        .append('<p id=login> Username:' + user + '</p>')
                        .append('<p id=forks>Forks: ' + res.data[i].forks + '</p>')
                        .append('<p id=size>Size: ' + res.data[i].size + '</p>')
                        .append('<p id=language>Languages: ' + res.data[i].language + '</p>')
                        .append($('<button style="float:right; height:auto; background-color:black; color:white;" name="Button" value="' + i + '" onClick="pickList(' + i + ', \'' + user + '\')" id="pick">').text('PICK'))
                )
        }
    })
}
$('#search').click(() => {
    var user = $('#username').val();
    $('#repo_list').empty()
    showRepos(user);
})


function pickList(i, user) {
    showData(user).then((res) => {
        for (let k in res.data) {

            if (k == i) {
                // console.log(res.dat[k].name)
                $('#pick_list')
                    .append(
                        $('<li>').attr('class', "list-group-item my-2")
                            .append('<p id=name> Repository : ' + res.data[k].name + '</p>')
                            .append('<p id=login> Username:' + user + '</p>')
                            .append('<p id=forks>Forks: ' + res.data[k].forks + '</p>')
                            .append('<p id=size>Size: ' + res.data[k].size + '</p>')
                            .append('<p id=language>Languages: ' + res.data[k].language + '</p>')
                    )
            }
        }
    })
}