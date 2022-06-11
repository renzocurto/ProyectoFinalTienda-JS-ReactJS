import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, getDoc, setDoc, doc, addDoc} from 'firebase/firestore/lite'

const firebaseConfig = {
    // Completar con las credenciales de Firebase
    apiKey: "AIzaSyBOnXksav39rtBEZZmi_XAgLODcOaeRG2c",
    authDomain: "mi-primer-react-50bed.firebaseapp.com",
    projectId: "mi-primer-react-50bed",
    storageBucket: "mi-primer-react-50bed.appspot.com",
    messagingSenderId: "676372764562",
    appId: "1:676372764562:web:778fcf56185a847b9bd34b"
  };
  
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//PRODUCTS contiene todos nuestros items a publicar en nuestra colección de Firestore
const PRODUCTS = [

    {id : '11' , title : 'Pelapapas', price : 450 , pictureUrl : 'https://kitchenspot.com.ar/wp-content/uploads/2021/09/corta-fruta.jpg', description: 'Instrumento de cocina empleado para pelar verduras con piel dura capaces de ser laminadas.', adress : '/item/11', stock : '9', color: 'Negro'},

    {id : '22' , title : 'Bowl' , price : 550, pictureUrl : 'http://d3ugyf2ht6aenh.cloudfront.net/stores/741/031/products/whatsapp-image-2020-10-07-at-14-56-391-cd3d249a649c08db7316020941066228-640-0.jpeg', description:'Herramienta versátil en la cocina que nos permitirá manipular y preparar los alimentos e incluso conservarlos si contamos con film transparente alimentario o tapas especiales para tal propósito.', adress : '/item/22', stock : '9', color: 'Plateado'},
  
    {id : '33' , title : 'Espátula de Silicona', price : 250 , pictureUrl : 'https://tienda.elnuevoemporio.com.ar/digistore/pictures/Articulo/webp/693-19167-medium.webp', description:'Se utiliza para rascar el fondo de los recipientes o para incorporar con suavidad claras de huevo a una preparación.', category : 'cocina', adress : '/item/33', stock : '9', color: 'Rojo'},

    {id : '44' , title : 'Aceitero', price : 360, pictureUrl : 'http://d3ugyf2ht6aenh.cloudfront.net/stores/108/084/products/aceitera1-0922e63726578bf6a616118555564265-640-0.png', description:'Aceitero y vinagrero duo con tapa de acero inoxidable que gira fácilmente y permite seleccionar entre aceite, vinagre o posición de cerrado. Sistema antigoteo y libre de obstrucciones.', category : 'cocina', adress : '/item/44', stock : '46', color: ''},

    {id : '55' , title : 'Cacerola', price : 3600, pictureUrl : 'https://http2.mlstatic.com/D_NQ_NP_882133-MLA48947556298_012022-O.webp', description:'Vasija de metal , de forma cilíndrica , de poca altura , con asas , utilizada para cocer y guisar', category : 'cocina', adress : '/item/55', stock : '45', color: 'Negro'},

    {id : '66' , title : 'UnMate', price : 3000, pictureUrl :'https://http2.mlstatic.com/D_Q_NP_2X_861833-MLA47233827580_082021-P.jpg', description:'Mate de Acero Inoxidable. Producto extra-higiénico. Doble capa de acero.', category : 'otros', adress : '/item/66', stock : '36', color: 'Negro'},

    {id : '77' , title : 'Especiero', price : 4500, pictureUrl : 'https://images-na.ssl-images-amazon.com/images/I/51IARfv0pNL.jpg ', description:'Recipiente destinado a contener y conservar las especias para cocinar o para el servicio de mesa', category : 'cocina', adress : '/item/77', stock : '72', color: ''},

    {id : '88' , title : 'Set Barman', price : 5000, pictureUrl :'https://http2.mlstatic.com/D_NQ_NP_922410-MLA27688930177_072018-O.jpg', description:'El juego de coctelera de 5 piezas tiene suficientes accesorios ya sea en casa, en un bar o en una fiesta para convertirte en un bartender profesional y mezclar fácilmente deliciosos cócteles.', category : 'otros', adress : '/item/88', stock : '9', color: 'Metal'},

    {id : '99' , title : 'Plancheta', price : 4100, pictureUrl : 'https://http2.mlstatic.com/D_NQ_NP_928542-MLA45015505769_022021-O.jpg' , description:'La Planchetta es de hierro laminado en caliente que hace que, a diferencia de otros productos, no se raye permitiendo la utilización de una espátula metálica y posee propiedades anti-adherentes.', category : 'cocina', adress : '/item/99', stock : '18', color: ''},

]


async function dataToFirebase() {
    PRODUCTS.forEach((item) => {     
        // remplazar "cities" por el nombre de la coleccion
        const miColeccion = collection(db, "items")
        const newDoc = doc(miColeccion)

        setDoc(newDoc, item).then(() => {
          console.log("Document written with ID: ", newDoc.id)})
        .catch(err => {
            console.error("Error adding document: ", err);
        });
    });
}

export default dataToFirebase;