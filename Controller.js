const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');

let app=express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

let user=models.User;
let activity=models.Activity;
let desafio=models.Desafio;

app.post('/login',async (req, res)=>{
   let response=await user.findOne({
       where:{email:req.body.email, password:req.body.password} 
    });
    if (response === null){
        res.send(JSON.stringify(value, 'error'));
    }else{
        res.send(response);
    }
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});

















/** 
 * 
 * 
 * 
 * 
 *   
 * Veio de login
 * const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const [mostrar,setMostrar]= useState(true)

 //envio do fomrulario de login
    async function login()
    {
        let response=await fetch('http://192.168.1.105:3000/login',{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email: email,
                password: password
            })
        });
        let json=await response.json();
        if(json === 'error'){
            alert('Senha ou usuario invalido')
        }
        

    }





app.get('/create',async (req,res)=>{
    let create=await user.create({
       name:'Lucas',
       password:'123',
       email:'rsena@gmail.com',
       createdAt: new Date(),
       upDatedAt: new Date(),
    });
    res.send('Usuario criado com sucesso');
});

app.get('/read', async (req,res)=>{
    let read=await user.findAll({
      raw:true,
    });
    console.log(read);
});

app.get('/update', async (req,res)=>{
    let update=await user.findByPk(1,
    {include:[{all:true}]}
    ).then((response)=>{
        response.Activities[0].local='Teste';
        response.Activities[0].save();
    });
});

app.get('/delete', async (res,res)=>{
    user.destroy({
        where:{id:2}
    });
});**/