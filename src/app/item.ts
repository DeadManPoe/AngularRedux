export abstract class Item {
    id : number;
    title : string;
    constructor(id:number, title:string){
        this.id = id;
        this.title = title;
    }
}
export class TextItem extends Item {
    text : string;
    constructor(id: number, title: string,text: string){
        super(id,title);
        this.text = text;
    }
}
export class ImgItem extends Item {
    imgLink : string;
    caption : string;
    constructor(id: number, title: string, imgLink: string, caption: string){
        super(id,title);
        this.imgLink = imgLink;
        this.caption = caption;
    }
}
