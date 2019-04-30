
import {Controller, Delete, Get, HttpCode, Post, Put, Headers,Param,Request, Response} from '@nestjs/common';

import { AppService } from './app.service';
import {Body} from "@nestjs/common/decorators/http/route-params.decorator";

import * as Joi from '@hapi/joi';


//http://192.168.1.10:3000/segmentoInicial
//http://192.168.1.10:3000/mascotas/crear
//http://192.168.1.10:3000/mascotas/borrar
//@Controller(va a recibir como parametro el segmentoInicial)

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  //@Controller(va a recibir como parametro el segmentoAccion)
  @Get('/hello-world')// METODO HTTP
  helloHello(): string {
    return 'Hello World';
  }

  @Post('/hola-mundo') // METODO HTTP
  holaMundo(){
    return 'Hola mundo en post';
  }

  @Put('/salut-monde') // METODO HTTP
  saluldMonde(){
    return 'Salut monde';
  }

  @Delete('/hallo-welt') // METODO HTTP
  halloWelt(){
    return 'Hallo welt';
  }

  @Get('/adivina')// METODO HTTP
  adivina(@Headers() headers): string {
    console.log('Headers: ', headers);
    const numeroRandomico = Math.round(Math.random() * 10);



/*
    //js->ts
    let nombre ='Leonardo'; //string
    let edad=29; //number
    let sueldo=1.20; /number
    let casado=false; //boolean
    let hijos=null; // null
    const alas=undefined; //undefined
*/
    const numeroDeCabecera= Number(headers.numero) ;
    if(numeroDeCabecera==numeroRandomico){
      return 'ok';
    }else{
      return ':(';
    }

    return 'Ok';
  }

  @Get('/ciudad/:idCiudad')
  ciudad(@Param() parametrosRuta){
    switch(parametrosRuta.idCiudad.toLowerCase()){
      case 'quito':
        return 'Que fueff';
      case 'guayaquil':
        return 'Que mah ñaños';
      default:
        return 'Buenas tardes';

    }
  }

  @Post('/registroComida')
  registroComida(@Body() parametrosCuerpo,
                 @Response() response) {
    if (parametrosCuerpo.nombre && parametrosCuerpo.cantidad) {
      const cantidad = Number(parametrosCuerpo.cantidad);
      if (cantidad > 1) {
        response.set('Premio', 'Guatita');
        return response.send({mensaje: 'Registro Creado'});
      } else {
        return response.status(400)
            .send({mensaje: 'Erro, no envia nombre o cantidad', error: 400});
      }


    }
  }

  @Get('/semilla')
  semilla(@Request() request,
          @Response() response){
    console.log(request.cookies);
    const noHayCookies=!request.cookies;
    const cookies=request.cookies;

    const esquemaValidacionNumero = Joi
        .object()
        .keys({
          numero: Joi.number().integer().required()
        });

    const objetoValidacion = {
      numero: cookies.numero
    };
    const resultado = Joi.validate(objetoValidacion,
        esquemaValidacionNumero);

    if(resultado.error){
      console.log('Resultado: ', resultado);
    }else{
      console.log('Numero valido');
    }

    const cookieSegura = request.signedCookies.fechaServidor;
    if(cookieSegura){
      console.log('Cookie segura');
    }else{
      console.log('No es valida esta cookie');
    }


    if(cookies.micookie){
      const horaFechaServidor=new Date();
      const minutos=horaFechaServidor.getMinutes();
      horaFechaServidor.setMinutes(minutos+1);


      response.cookie(
          'fechaServidor', //nombre
          new Date().getTime(), //valor
          {//opciones
            //expires:horaFechaServidor
            signed:true
          });
      return response.send('ok');
    }else{
      return response.send(':(');
    }
  }

  @Get('inicio')
    inicio(
      @Response() res
  ){
    return res.render('inicio')
  }



  /*
  *Segmento inicial: /api
  *1) Segmento accion:GET 'hello-world' -> 'hello-world'
  *2) Segmento accion:POST 'hola mundo' -> 'hola mundo'
  *3) Segmento accion:PUT 'salut-mond' ->
  *4) Segmento accion:DELETE 'hallo-Welt' ->
  */

//diferencia entre archivo json (notacion de objetos JS) y uno JS


}

/*
@NombreDecoradorClase()
class usuario{
  @Atributo()
  atributoPublico; //public
  private atributoPrivado;
  protected atributoProtegido;
  constructor(@Parametro atributoPublico,
              @OtroParametro atributoPrivado,
              @OtrooParametro atributoProtegido){
    this.atributoPublico=atributoPublico;
    this.atributoPrivado=atributoPrivado;
    this.atributoProtegido=atributoProtegido;
  }

  @MetodoA()
  public metodoPublico(@ParametroA() a){}
  @MetodoB()
  private metodoPrivado(){}
  protected metodoProtegido(){}

}
*/


const json=[
  {
    llave: 'valor',
    "key": "value",
    "nombre":"Leonardo",
    "edad":23,
    "sueldo":10.21,
    "casado": false,
    "hijos": null,
    "mascotas": ["cachetas",
      1,
      23.2,
      false,
      null,
      {
        "nombre": "cachetas"
      },
    ],
  },
]
;



let objeto:any={
  propiedad:'valor',
  propiedad2:'valor2'
};
objeto.propiedad//valor
objeto.propiedad2//valor2

//Agregar propiedades a un objeto
objeto.propiedadTres='valor3';
objeto['propiedadTres']='valor3';
delete objeto.propiedadTres; //->destruir
objeto.propiedadTres=undefined;
//Eliminar una propiedad


//variables ? const, let, var
//tipos de datos String, number, boolean

function holaMundo() {
  console.log('Hola mundo')
}

const respuestaHolaMundo=holaMundo();
console.log('Resp hola mundo: ', respuestaHolaMundo);

function suma(a,b) {
  return a+b;
}
const respuestaSuma=suma(3,6);
console.log('Respuesta suma: ',respuestaSuma)

//condicionales
//valores Truty -> true
// Falsy -> false

if(true){ //Truty
  console.log('verdadero');
}else{  //Flasy
  console.log('falso');
}

if({}){
  console.log('Verdadero ""');
}else{
  console.log('Falso ""');
}

//Operadores de arreglos JS

let arreglo=[
    function () {return '0'},
    1,'a',true,null,[],{}];

const arregloNumero=[1,2,3,4,5,6];
//1) Impriman en consola todos los elementos

const arregloNumerosForEach=[1,2,3,4,5,6];

arregloNumerosForEach
    .forEach(
        function(valorActual, indice, arreglo) {
          console.log(`Valor: ${valorActual}`);
          console.log(`Indice: ${indice}`);
          console.log(`Arreglo: ${arreglo}`);
      }
    );


const rForEach=arregloNumerosForEach
    .forEach(
        function(valorActual) {
          console.log(`Valor: ${valorActual}`);
        }
    );
console.log(`Respuesta FOREACH: ${rForEach}`);


const r2ForEach=arregloNumerosForEach
    .forEach(
        n=> console.log(`${n}`));


//2) Sumen 2 alos pares y 1 a los impares

const arregloNumerosMap=[1,2,3,4,5,6];
const rMap=arregloNumerosMap
    .map( //Devolver nuevo VALOR de ese elemento
        (valorActual)=>{

          const esPar=valorActual%2==0;
          if(esPar){
            return valorActual+2;
          }else{
            return valorActual+1;
          }

        }
    );

console.log(`Respuesta MAP: ${rMap}`);

//3) Encuentren si hay el numero4

const arregloNumerosFind=[1,2,3,4,5,6];
const rFind = arregloNumerosFind
    .find(//condicion
        (valorActual)=>{
            return valorActual==4;
            //return valorActual.apellido=='Sandoval'
        }
    );

console.log(`Respuesta MAP: ${rFind}`);

//4) Filtren los numeros menores a 5

const arregloNumerosFilter=[1,2,3,4,5,6];

const rFilter=arregloNumerosFilter
    .filter( // nos va a devolver un nuevo arreglo filtrado
            //condicion TURE -> agrega al arreglo
            //condicion FALSA -> se omite el arreglo
        (valorActual)=>{
            return valorActual<5;
        }
    );

console.log(`Respuesta MAP: ${rFilter}`);

//5) TODOS los valores positivos

const arregloNumerosEvery=[1,2,3,4,5,6];
const respuestaEvery = arregloNumerosEvery // operador logico AND
    .every( //si todos cumplen TRUE
            // si alguno no cumplen FALSE
        (valorActual)=>{
            return valorActual>0
        }
    );
console.log(`Respuesta Every ${respuestaEvery}`);

//6) ALGUN valor es menor que 2

const arregloNumerosSome=[1,2,3,4,5,6];

const respuestaSome = arregloNumerosEvery
    .some( //si todos cumplen TRUE
        // si alguno no cumplen FALSE
        (valorActual)=>{
          return valorActual<2
        }
    );
console.log(`Respuesta Some ${respuestaSome}`);


//7) Sumen todos los valores

const arregloNumerosReduce=[1,2,3,4,5,6];
const valorDondeEmpiezaCalculo=0;

const respuestaReduce = arregloNumerosReduce
    .reduce(
        (acumulado, valorActual)=>{
          return acumulado+valorActual;
        },
        valorDondeEmpiezaCalculo
);
console.log(`Respuesta Reduce ${respuestaReduce}`);


//  si es el numero es <4  ==> 10%+5
//  si es el numero es >=4 ==> 15%+3
//reduce write para empezar por la izquierda

const arregloNumerosReduce2=[1,2,3,4,5,6];
const valorDondeEmpiezaCalculo2=0;

const respuestaReduce2 = arregloNumerosReduce
    .reduce(
        (acumulado, valorActual)=>{
          if(valorActual<4) {
            return acumulado+valorActual*1.1+5;

          }else{
            return acumulado+valorActual*1.5+3;

          }
        },
        valorDondeEmpiezaCalculo2
    );
console.log(`Respuesta Reduce ${respuestaReduce2}`);


//8) Resten todos los valores de 100

const arregloNumerosReduce3=[1,2,3,4,5,6];
const valorDondeEmpiezaCalculo3=100;


const respuestaReduce3 = arregloNumerosReduce
    .reduce(
        (acumulado, valorActual)=>{
          return acumulado-valorActual;
        },
        valorDondeEmpiezaCalculo3
    );
console.log(`Respuesta Reduce ${respuestaReduce3}`);


//1.1) Sumen 10 a todos

const arregloEjercicio=[1,2,3,4,5,6];

const respuestaEjercicio=arregloEjercicio
    .map(
        (valorActual)=>{
          return valorActual+10;
    })
    .filter(
        (valorActual)=>{
          return valorActual >15;
        }
    )
    .some(
    (valorActual)=>{
    return valorActual <30;
})

console.log(`Respuesta Ejercicio ${respuestaEjercicio}`);

//1.2) Filtren a los mayores a 15




//1.3) Si hay algun numero mayor a 30

