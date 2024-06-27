import React, {useState, useEffect} from 'react';

//Style
import './style/index.css';

type HeroiProps = {
    heroi: string;
    experiencia: number
}

function Heroi({heroi, experiencia}:HeroiProps){
    const [exp, setExp]= useState<number>(0)

    const chibi = require('./img/pj1.png')

    let title:string, informacao:string, nivel:number

    //Definição cartão do Heroi
    const cartaoHeroi = (experiencia:number, heroi:string, page:boolean) => {}

    const functionTitle = (expValidado:number) => {
        let titleText:string

        //Título
        if(experiencia < 1000){
            return titleText = 'Ferro'
        }else if(experiencia >=1001 && experiencia <= 2000){
            return titleText = 'Bronze'
        }else if(experiencia >=2001 && experiencia <= 5000){
            return titleText = 'Prata'
        }else if(experiencia >=5001 && experiencia <= 7000){
            return titleText = 'Ouro'
        }else if(experiencia >=7001 && experiencia <= 8000){
            return titleText = 'Platina'
        }else if(experiencia >=8001 && experiencia <= 9000){
            return titleText = 'Ascendente'
        }else if(experiencia >=9001 && experiencia <= 10000){
            return titleText = 'Imortal'
        }else if(experiencia >= 10001){
            return titleText = 'Radiante'
        }else{
            return titleText = 'Iniciante'
        }
    }

    const functionNivel = (expValidado:number) => {
        let nivelExp:number

        //Título
        if(experiencia < 1000){
            return nivelExp = 20
        }else if(experiencia >=1001 && experiencia <= 2000){
            return nivelExp = 30
        }else if(experiencia >=2001 && experiencia <= 5000){
            return nivelExp = 50
        }else if(experiencia >=5001 && experiencia <= 7000){
            return nivelExp = 60
        }else if(experiencia >=7001 && experiencia <= 8000){
            return nivelExp = 70
        }else if(experiencia >=8001 && experiencia <= 9000){
            return nivelExp = 80
        }else if(experiencia >=9001 && experiencia <= 10000){
            return nivelExp = 90
        }else if(experiencia >= 10001){
            return nivelExp = 999
        }else{
            return nivelExp = 0
        }

    }

    //Chamando informações para preencher
    const handleSubmite = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()           
        
        alert('cliquei')

        let textExperiencia:HTMLElement | null = document.getElementById('experiencia') ?? null
        let textNivel:HTMLElement | null = document.getElementById('level') ?? null
        let textTitle:HTMLElement | null = document.getElementById('titulo') ?? null
        let textInformacao:HTMLElement | null = document.getElementById('texto') ?? null

        //Subindo de Level
        let countExp:number = exp
        let valor:number
        
        for(countExp; countExp > 0; countExp--){
            setTimeout(()=>{
                valor = experiencia + 1
                textExperiencia!.innerText = valor.toString() + ' / 10001'
            },500)            
        }

        title = functionTitle(experiencia) ?? ""
        textTitle!.innerText = title

        nivel = functionNivel(experiencia) ?? 0
        if(nivel === 999){
            textNivel!.innerText = '??'
        }else{
            textNivel!.innerText = nivel.toString()
        }
        
        
        
        //Montando Informação
        informacao = `O Herói de nome ${heroi} está no nível de ${title} `
        textInformacao!.innerText = informacao
    }

    return(        
        <>
            <div className='title'>
                <h1>Classificação Herói</h1>
                <img width="64" height="64" src="https://img.icons8.com/dusk/64/elden-ring.png" alt="elden-ring"/>
            </div>
            <div className="content-personagem">                
                <div id="personagem">
                    <img src={chibi} alt="Herói" />
                </div>
                <div className="informacoes">
                    <div id="nome">{heroi}</div>
                    <div id="titulo">{}</div>
                    <div id="level">Level {}</div>
                    <div id="experiencia"> {experiencia} / 10001 </div>                    
                    <div id="texto">{}</div>            
                </div>            
            </div>
            <div>
                <form id="form-up-heroi" onSubmit={handleSubmite}>
                    <input 
                        type="number" 
                        placeholder="Experiência"
                        value={exp}
                        onChange={(e) => setExp(parseInt(e.target.value))}
                    />
                    <button type="submit">Ganhar</button>
                </form>
            </div>
        </>
        
    )
}
  
export default Heroi;
  