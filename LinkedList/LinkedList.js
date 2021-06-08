import {Node} from "./Node.js";

class LinkedList{
    constructor(){
        this.head=null;
        this.last=null;
    }
    addFirst(data){
        if(this.head==null){
            this.head=new Node(data);
            this.last=this.head;
        }
        else{
            let node=new Node(data);
            node.next=this.head;
            this.head=node;
        }
    }
    addLast(data){
        if(this.head==null){
            this.head=new Node(data);
            this.last=head;
        }
        else{
            this.last.next=new Node(data);
            this.last=this.last.next;
        }
    }
    print(){
        let tmp=this.head;
        while(tmp!=null){
            console.log(tmp.data);
            tmp=tmp.next;
        }
    }
}

const List=new LinkedList();
List.addFirst(1);
List.addFirst(2);
List.addFirst(3);
List.addFirst(4);
List.print();