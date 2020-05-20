export class Person {
    constructor(name, imageUrl) {
        this.name = name;
        this.imageUrl = imageUrl;
    }

    modul

  render() {
    return `
        <div class="profile shadow">
            <img src="${this.imageUrl}"/>
            <h2>${this.name}</h2>
        </div>
        
    `
}
  }
