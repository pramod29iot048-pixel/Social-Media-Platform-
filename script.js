let likes = 0;
let followers = 10;

function like() {
    likes++;
    document.getElementById("likes").innerHTML =
        "Likes: " + likes;
}

function follow() {
    followers++;
    document.getElementById("followers").innerHTML =
        "Followers: " + followers;
}

function addComment() {
    let c = document.getElementById("comment").value;

    document.getElementById("comments").innerHTML +=
        "<p>💬 " + c + "</p>";

    document.getElementById("comment").value = "";
}
