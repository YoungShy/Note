function Pi(options) {
    var color = options.color || "black",
        fontFamily = options.fontFamily || "Microsoft YaHei",
        fontStyle = options.fontStyle || "normal"
    
    this.getContent = ()=>{
        this.positon = window.getSelection()
        this.content = window.getSelection().getRangeAt(0)
        this.contentText = window.getSelection().toString()
        console.log(this.positon)
        console.log(this.content)
        console.log(this.contentText)
    }

    this.addNote = (note)=>{
        this.note = note
        console.log(this.note)
        //刷新节点
        var node = document.createElement('span')
        var text = document.createTextNode(this.contentText)
        node.appendChild(text)
        this.content.deleteContents()
        this.content.insertNode(node)
        //创建批注节点
        var note = document.createElement('span')
        var noteText = document.createTextNode(this.note)
        node.appendChild(noteText)
        //监听节点
        node.addEventListener("click", ()=>{  
            console.log(note)
        })
    }
}

