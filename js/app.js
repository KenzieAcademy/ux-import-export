import {Person} from "./personalProfile"
const name = new Person('');

let people = [
    new Person("Bob", "https://github.com/KenzieAcademy/ux-import-export/blob/master/images/bob-ross.jpg"),
    new Person("Frida", "https://github.com/KenzieAcademy/ux-import-export/blob/master/images/frida-kahlo.jpg"),
    new Person("Dali", "https://github.com/KenzieAcademy/ux-import-export/blob/master/images/dali.jpg")
];

window.onload = () => {
    renderList(people);
};

function renderList(people) {
    let html = "";
    html += `<ul>`;
    var x = document.getElementById("");

    for (let person of people) {
        html += "<li>";
        html += person.imageUrl;
        html += "</li>";
    }
    html += "</ul>";

    document.getElementById("list").innerHTML = html;
}