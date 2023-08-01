# Portafolio
Portafolio de Ediwn Arevalo, tanto de ingeniero Civil con desarrollador de software 




 La animación css de las pantallas de teléfono en pila, para descargar o ver el hv de ingeniero




Primera sección inicio: podría ser muy simple el logo en la parte superior izquierda el menú en la derecha, de fondo transparente, el fondo de la sección en degradado, con un texto grande bien denso saludando "¡Hola!", luego otro menos denso que diga "Soy Edwin j Arevalo", y luego un mensaje en texto normal "algo relacionado a ingeniería ingeniería no importa la carrera sigue siendo ingenioso o algo así", sería bueno incluir una animación pero que sea muy sutil suave, puede ser que la palabra Arévalo esté como animada como escribiéndose

Cambio de sección : para diferenciar las dos acciones colocar como un estilo de olas, con diferentes tonalidades y profundidades y transparencias, también se podría colocar una animación como que esas olas se muevan, espero que estén en función del scroll si el cambio está en la mitad de la página que sea más rápido y si están en los costados que sea más lento

Segunda sección acerca de mi: con fondo blanco o gris muy claro degradado, tonos muy suaves. Que lleve la descripción del mi perfil profesional, mi foto, mis tegnologias favoritas y por qué lo són , si algo colocar gustos o hobbies.
Cambio de sección: si animación en la interseccion por qué el fondo es el mismo en las dos secciones, sin embargo que los objetos de la siguiente sección se animen apareciendo de dientes lados
Tercera Sección Proyectos:















/* GENERAL */
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Paytone+One&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Nunito Sans", sans-serif;
}
html {
  scroll-behavior: smooth;
}

:root {
  --cafe-bg-color: rgb(128, 0, 0);
  --amarillo-bg-color: #ffffa7;
  --rosado-bg-color: #faa786;
  --rojo-bg-color: #ff4343;
  --naranja-bg-color: #ff9021;
  --azul-bg-color: #8ee7d2;
  --piel-bg-color: #ffe8bc;

  /* --widthLogo: 78px;
    --heightLogo: 105px; */
  --widthLogo: 200px;
  --heightLogo: 268px;
}

/*____________ general _______________*/

.titulo-seccion {
  font-size: 50px;
  font-family: "Nunito Sans", sans-serif;

  color: var(--cafe-bg-color);
  user-select: none;
  text-align: center;
  padding-top: 70px;
}

.descripcion-seccion {
  font-size: 20px;
  text-align: center;
  padding-bottom: 10px;
  user-select: none;
  max-width: 900px;
  margin: auto;
}

/* #section_interactiva p{
    
    max-width: 900px;
    margin: auto;
    font-size: 20px;
    text-align: justify;
    padding-top: 10px;
    padding-bottom: 10px;
    user-select: none;
} */

/***********************************   HEADER     *************************/

#menu-superior {
  opacity: 1;
}
#menu-container {
  background-color: rgb(142, 231, 210, 0);
  box-shadow: 0px 0px 20px 2px rgb(119, 119, 119, 0);
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 10;
  transition: all 1s;
  left: 1px;
  left: 0;
}
.enfocar {
  backdrop-filter: blur(10px);
}

/*general*/
#menu {
  width: calc(100% - 10%);
  height: 100%;
  margin: 0 5%;
  display: flex;
  flex-direction: row;
  transition: all 1s;
}

/*boton menu*/
.icon-menu {
  margin: auto;
}
.header-nav {
  cursor: pointer;
  width: 40px;
  height: 30px;
  border-radius: 2px;
  text-decoration: none;
  /* display: none; */
}

.color-yes {
  width: 100%;
  height: 6px;
  background-color: ivory;
  border-radius: 2px;
}
.color-no {
  width: 100%;
  height: 6px;
}

/*logo*/
#menu .img-logo {
  width: 100%;
  display: flex;
}
#menu img {
  height: 40px;
  margin: auto;
}
#logo-sup {
  opacity: 0;
}

/*registro e inicio de sesion*/
.user-link {
  text-decoration: none;
  color: var(--cafe-bg-color);
  text-align: center;
  margin: auto;
  font-size: 18px;
  margin-left: 10px;
}

.signIn {
  min-width: 120px;
}

.signUp {
  border: 1px solid var(--cafe-bg-color);
  padding: 2px 10px;
  border-radius: 7px;
}
.signUp:hover {
  background-color: var(--cafe-bg-color);
  color: white;
}

/*usuario*/
.container-user {
  display: none;
  float: right;
}
.container-user .user {
  height: 50px;
  width: 50px;
  margin: 5px 40px 5px 10px;
  cursor: pointer;
  border: 0 rgb(0, 0, 0);
  background-color: rgb(241, 247, 255);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  display: none;
}

/*media query*/
@media screen and (max-width: 1200px) {
  .nawRecetas li:nth-child(0n + 1),
  .nawRecetas li:nth-child(0n + 2),
  .nawRecetas li:nth-child(0n + 3),
  .nawRecetas li:nth-child(0n + 4),
  .nawRecetas li:nth-child(0n + 5) {
    display: none;
  }
  .header-nav {
    display: block;
  }
  .nawRecetas .busqueda {
    width: 90%;
    float: left;
  }
  .nav-button {
    float: left;
  }
  .nav-button {
    top: 20px;
    right: 160px;
  }
}

/* 
@media screen and (max-width: 500px){

.nawRecetas li:nth-child(0n+6){
display: none;
}

#menu .img-logo{
margin-top: 15px;
margin-left: 15px;
}
#menu img{
height: 50px;
}

.container-user .user{
margin-right: 15px;
}
.container-user .user{
height: 40px;
width: 40px;
margin: 20px 40px 20px 10px;
}
.header-nav{
height: 25px;
margin: 30px 5px 30px 15px;
}
.color-yes{
height: 5px;
}
.color-no{
height: 5px;
}
} */

/***********************************   NAV     *************************/

#nav_drawer {
  position: absolute;
  width: 200px;
  height: 100vh;
  background-color: #8ee7d2;
  position: fixed;
  flex-direction: column;
  display: flex;
  /* display: none;     */
  left: -200px;
  transition: all 1s;
  z-index: 200;
  border-right: 1px solid #c2c2c2;
}

.nav-espacio {
  height: 60px;
}
#navbar_logo {
  width: 150px;
  height: 150px;
  padding: 25px;
}

#nav_drawer span {
  font-weight: 700;
  font-size: 19px;
}

.naw a {
  margin: 20px;
  text-align: center;
  font-size: 18px;
  text-decoration: none;
  color: var(--cafe-bg-color);
}

.naw a:hover {
  font-weight: 700;
  color: var(--cafe-bg-color);
  transition: all 0.5s;
}

.naw li {
  margin: 5px 0;
}

#buttonreg_nav {
  width: 150px;
  height: 30px;
  font-size: 18px;
  position: absolute;
  left: 25px;
  bottom: 10px;
  border: 1px solid var(--cafe-bg-color);
  border-radius: 10px;
  color: var(--cafe-bg-color);
  background-color: rgb(243, 229, 222);
  cursor: pointer;
  margin-bottom: 20px;
}
#buttonlogin_nav {
  width: 150px;
  height: 30px;
  font-size: 18px;
  position: absolute;
  left: 25px;
  bottom: 50px;
  border: 1px solid var(--cafe-bg-color);
  border-radius: 10px;
  color: var(--cafe-bg-color);
  background-color: rgb(243, 229, 222);
  cursor: pointer;
  margin-bottom: 20px;
}

#link_registro {
  text-decoration: none;
}

#buttonreg_nav:hover,
#buttonlogin_nav:hover {
  cursor: pointer;
  border: 2px solid var(--cafe-bg-color);
  background-color: var(--piel-bg-color);
  box-shadow: 2px 2px 10px 2px #8000006c;
}

@media screen and (max-width: 600px) {
  #nav_drawer {
    left: -200px;
    background-color: #f6f6f6;
  }
}

#contenedor {
  width: 100%;
  margin-left: 0px;
  transition: all 1s;
}

/*________________________________*/
/*------------  HOME ------------ */
/*________________________________*/
#section_Home {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: var(--piel-bg-color);
  font-weight: 600;
  background: rgba(3, 3, 3, 0.2) fixed no-repeat 50% 50%;
  background-size: cover;
  background-image: url("../img/fondo_4.png");
}

#section_Home #car {
  max-width: 800px;
  margin: auto;
}
#section_Home ._0 {
  margin: auto;
}
#section_Home #nombre1 {
  width: 300px;
  height: 00px;
  margin: 15px 100px 0px 140px;
  font-size: 50px;
  transition: all 1s;
  user-select: none;
  color: #87430d;
}

#section_Home #nombre2 {
  margin: 0px 0px 0px 219px;
  font-size: 50px;
  transition: all 1s;
  user-select: none;
  color: #87430d;
}

#section_Home #nombre3 {
  margin: 0px 0px 0px 400px;
  font-size: 50px;
  transition: all 1s;
  user-select: none;
  color: #87430d;
}

#section_Home span {
  font-size: 60px;
  transition: all 1s;
  user-select: none;
  color: #ba5e02;
}

#section_Home .fondoDescripcion {
  width: 100%;
  line-height: 25px;
  font-size: 18px;
  text-align: justify;
  user-select: none;
  padding: 15px;
  background-color: rgb(255, 255, 255, 0.3);
  box-shadow: 1px 0px 5px 3px rgb(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 10px;
}
#section_Home #descripcion {
  line-height: 25px;
  font-size: 18 px;
  text-align: justify;
  user-select: none;
  padding: 15px;
}

#section_Home #descripcion2 {
  text-align: center;
}

#section_Home #car:hover #nombre1 {
  height: 50px;
  margin-top: -5%;
  margin-left: 100px;
  font-size: 70px;
}
#section_Home #car:hover #nombre2 {
  font-size: 70px;
  margin-left: 180px;
}
/* #section_Home #car:hover #nombre3{
    font-size: 70px;
    margin-left: 180px;
} */
#section_Home #car:hover span {
  font-size: 70px;
  color: var(--piel-bg-color);
  -webkit-text-stroke: 1px #80000058;
}
#section_Home #car:hover ._0 {
  padding-left: 1px;
  transition: all 1s;
}
#section_Home #car:hover .shadowLogo {
  filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.8));
  transition: all 1s;
}

#section_Home #car:hover ._0 {
  transition: all 1s;
  padding: 10px;
}

/*_____________________________________________________________________________________*/
/*____________________________________ RECETAS _________________________________________*/
/*_____________________________________________________________________________________*/

#section_Recetas {
  /* height: 100vh; */
  background-image: linear-gradient(-30deg, #83817e 50%, #e3ddd9 70%);
  background: rgb(255, 247, 238);
  background: radial-gradient(
    circle,
    rgba(255, 247, 238, 0.6870098381149334) 0%,
    rgb(218, 218, 218) 100%
  );
  font-family: "Raleway", sans-serif;
  background-size: 100% 100%;
  /* clip-path: polygon(0.0% 78.35531444222059%, 0.8059381231705752% 79.16664910987043%, 1.6118412613263986% 79.97313810175919%, 2.4176744294527177% 80.76993574212578%, 3.223414304206365% 81.55240703676392%, 4.029014238901004% 82.31549562835774%, 4.834439248521884% 83.05446118192353%, 5.639666009725834% 83.76456336247762%, 6.444659537498104% 84.44085115348152%, 7.2493848468239435% 85.07858421995155%, 8.053795291017014% 85.67291688612661%, 8.857879208405734% 86.21910881702307%, 9.66157829063218% 86.71220899610239%, 10.46488087602477% 87.1473717476035%, 11.267740317897168% 87.51996207732013%, 12.07012163123462% 87.8250289687138%, 12.872001492693963% 88.0578320868008%, 13.673333255588856% 88.21342041504266%, 14.474093596576132% 88.2870536184557%, 15.274247530641041% 88.27388602127884%, 16.249991253746312% 88.1332560834299%, 16.872596237944748% 87.96871378910777%, 17.670767687840378% 87.67323290845886%, 18.468309407470468% 87.28621089223638%, 19.265256381849778% 86.81080796376277%, 20.06162027264988% 86.25050036869271%, 20.857436064885544% 85.60844833034868%, 21.652738743571504% 84.8879174128305%, 22.447563293722524% 84.0923838617929%, 23.24192137701018% 83.22500790055831%, 24.035847978449233% 82.289160434004%, 24.829378083054426% 81.28810702622985%, 25.62253501416893% 80.22511324133572%, 26.4153537568075% 79.1036553249763%, 27.207857634313303% 77.92678815969663%, 28.00008163170109% 76.69798799115138%, 28.792049072314025% 75.42052038344043%, 29.583783279495286% 74.09765090066365%, 30.375330899931196% 72.7326451069209%, 31.166703595293356% 71.32897924786684%, 31.957948012268076% 69.88981354682397%, 32.74907581252697% 68.41841356789213%, 33.540121981084766% 66.9181502159486%, 34.331121502956236% 65.39239439587064%, 35.122097701484535% 63.84430633098072%, 35.913073900012826% 62.27736226693354%, 36.70409674522747% 60.69472242705151%, 37.495177898800016% 59.09965237543453%, 38.286352345745236% 57.49562835773728%, 39.07765507107789% 55.88581059728221%, 39.86910939814113% 54.27346465816918%, 40.66075031194972% 52.66206678605288%, 41.45258947417523% 51.05488254503319%, 42.244673531504006% 49.455072158432536%, 43.037025807279214% 47.8660065311282%, 43.82966962484402% 46.29105656799748%, 44.622651630884775% 44.73348783314021%, 45.415983487073035% 43.19656589065628%, 46.209700178423574% 41.68355630464553%, 47.003836689951136% 40.19793532076267%, 47.79840468332731% 38.74275782155273%, 48.59345080523842% 37.32160539344781%, 49.38899837902765% 35.93753291899294%, 50.18507072803815% 34.594016643842835%, 50.98171449895628% 33.294216791319926%, 51.49997084582104% 32.47424417992205%, 52.576762953201715% 30.838512588222898%, 53.37516763652902% 29.686611187190564%, 54.174155403435535% 28.587274834088277%, 54.973702930578064% 27.541767618245032%, 55.77379855628506% 26.55177499209944%, 56.574418957213325% 25.6184557042031%, 57.37556413336288% 24.74328452543982%, 58.17721076139054% 23.927736226693355%, 58.97934717962473% 23.17318023807016%, 59.78196172639386% 22.48109133045402%, 60.58504274002635% 21.852628252396514%, 61.38856689717904% 21.28947645633626%, 62.19253419785191% 20.792900031602244%, 62.996909657030244% 20.36437374907827%, 63.80170493638558% 20.005267038870755%, 64.6068850509032% 19.71694933108607%, 65.4124383389115% 19.50089539660803%, 66.2183648004105% 19.358474665543042%, 67.024641112057% 19.291161908774896%, 67.83124395050787% 19.30032655641%, 68.63818497743466% 19.387232697777307%, 69.44542920782266% 19.55346044453809%, 69.91661904817437% 19.687664594964716%, 71.06066401558% 20.129779837775203%, 71.86829308113025% 20.543453070683668%, 72.67557229653299% 21.043716422627213%, 73.48225676668494% 21.63246602759928%, 74.28808993481125% 22.311808701148223%, 75.09279192079393% 23.083851258822307%, 75.89611782952967% 23.950595175392394%, 76.69781110424368% 24.91404192562942%, 77.49760352648948% 25.976509006636476%, 78.29523853949225% 27.139787211629624%, 79.09045958647714% 28.405983356157165%, 79.88301011066928% 29.777309596544825%, 80.67262189362224% 31.255767407563468%, 81.45903837856119% 32.84325292320658%, 82.24200300871127% 34.541978299799865%, 83.02124756562606% 36.35405035289161%, 84.16661030192068% 39.24670810070579%, 84.56758521766511% 40.32602970609924%, 85.33441009434291% 42.48572632466028%, 86.09722335599585% 44.7545559886232%, 86.85623491271238% 47.12651427367535%, 87.61167799792423% 49.595491414726645%, 88.36377418339146% 52.15548298746445%, 89.11274504087416% 54.80027388602128%, 89.85881214213246% 57.5239650268619%, 90.60220872059801% 60.32044664489624%, 91.34314468635935% 63.18360897503423%, 92.08185327284812% 66.10744759296324%, 92.81855605182447% 69.0859580743706%, 93.55346293337688% 72.1128199726114%, 94.28680715093702% 75.18223954492784%, 95.01882193793658% 78.28800168545244%, 95.74971720446409% 81.42410196987254%, 96.47971452227962% 84.58443063309807%, 97.20904712481487% 87.7630885915938%, 97.93793658382992% 90.95375539871485%, 99.9999300299705% 100.0%, 99.9999300299705% 0.005161698093331779%, 0.0% 0.005161698093331779%); */
  /* clip-path: polygon(0.0% 89.1776572211103%, 0.8059381231705752% 89.58332455493522%, 1.6118412613263986% 89.9865690508796%, 2.4176744294527177% 90.38496787106288%, 3.223414304206365% 90.77620351838196%, 4.029014238901004% 91.15774781417886%, 4.834439248521884% 91.52723059096176%, 5.639666009725834% 91.88228168123881%, 6.444659537498104% 92.22042557674075%, 7.2493848468239435% 92.53929210997578%, 8.053795291017014% 92.83645844306331%, 8.857879208405734% 93.10955440851154%, 9.66157829063218% 93.3561044980512%, 10.46488087602477% 93.57368587380175%, 11.267740317897168% 93.75998103866007%, 12.07012163123462% 93.91251448435689%, 12.872001492693963% 94.0289160434004%, 13.673333255588856% 94.10671020752133%, 14.474093596576132% 94.14352680922785%, 15.274247530641041% 94.13694301063941%, 16.249991253746312% 94.06662804171495%, 16.872596237944748% 93.98435689455388%, 17.670767687840378% 93.83661645422943%, 18.468309407470468% 93.6431054461182%, 19.265256381849778% 93.40540398188139%, 20.06162027264988% 93.12525018434636%, 20.857436064885544% 92.80422416517433%, 21.652738743571504% 92.44395870641526%, 22.447563293722524% 92.04619193089646%, 23.24192137701018% 91.61250395027915%, 24.035847978449233% 91.144580217002%, 24.829378083054426% 90.64405351311493%, 25.62253501416893% 90.11255662066786%, 26.4153537568075% 89.55182766248815%, 27.207857634313303% 88.96339407984831%, 28.00008163170109% 88.34899399557568%, 28.792049072314025% 87.71026019172021%, 29.583783279495286% 87.04882545033183%, 30.375330899931196% 86.36632255346045%, 31.166703595293356% 85.66448962393342%, 31.957948012268076% 84.94490677341199%, 32.74907581252697% 84.20920678394607%, 33.540121981084766% 83.4590751079743%, 34.331121502956236% 82.69619719793532%, 35.122097701484535% 81.92215316549036%, 35.913073900012826% 81.13868113346678%, 36.70409674522747% 80.34736121352576%, 37.495177898800016% 79.54982618771726%, 38.286352345745236% 78.74781417886864%, 39.07765507107789% 77.94290529864111%, 39.86910939814113% 77.1367323290846%, 40.66075031194972% 76.33103339302644%, 41.45258947417523% 75.5274412725166%, 42.244673531504006% 74.72753607921626%, 43.037025807279214% 73.9330032655641%, 43.82966962484402% 73.14552828399874%, 44.622651630884775% 72.3667439165701%, 45.415983487073035% 71.59828294532814%, 46.209700178423574% 70.84177815232276%, 47.003836689951136% 70.09896766038133%, 47.79840468332731% 69.37137891077637%, 48.59345080523842% 68.6608026967239%, 49.38899837902765% 67.96876645949646%, 50.18507072803815% 67.29700832192142%, 50.98171449895628% 66.64710839565996%, 51.49997084582104% 66.23712208996102%, 52.576762953201715% 65.41925629411145%, 53.37516763652902% 64.84330559359529%, 54.174155403435535% 64.29363741704414%, 54.973702930578064% 63.770883809122516%, 55.77379855628506% 63.27588749604972%, 56.574418957213325% 62.80922785210155%, 57.37556413336288% 62.37164226271991%, 58.17721076139054% 61.96386811334668%, 58.97934717962473% 61.58659011903508%, 59.78196172639386% 61.24054566522701%, 60.58504274002635% 60.92631412619826%, 61.38856689717904% 60.64473822816813%, 62.19253419785191% 60.39645001580112%, 62.996909657030244% 60.182186874539134%, 63.80170493638558% 60.00263351943538%, 64.6068850509032% 59.858474665543035%, 65.4124383389115% 59.750447698304015%, 66.2183648004105% 59.67923733277152%, 67.024641112057% 59.64558095438745%, 67.83124395050787% 59.650163278205%, 68.63818497743466% 59.69361634888865%, 69.44542920782266% 59.776730222269045%, 69.91661904817437% 59.84383229748236%, 71.06066401558% 60.0648899188876%, 71.86829308113025% 60.271726535341834%, 72.67557229653299% 60.52185821131361%, 73.48225676668494% 60.81623301379964%, 74.28808993481125% 61.15590435057411%, 75.09279192079393% 61.54192562941115%, 75.89611782952967% 61.9752975876962%, 76.69781110424368% 62.45702096281471%, 77.49760352648948% 62.98825450331824%, 78.29523853949225% 63.56989360581481%, 79.09045958647714% 64.20299167807858%, 79.88301011066928% 64.88865479827241%, 80.67262189362224% 65.62788370378173%, 81.45903837856119% 66.4216264616033%, 82.24200300871127% 67.27098914989993%, 83.02124756562606% 68.17702517644581%, 84.16661030192068% 69.6233540503529%, 84.56758521766511% 70.16301485304962%, 85.33441009434291% 71.24286316233014%, 86.09722335599585% 72.3772779943116%, 86.85623491271238% 73.56325713683768%, 87.61167799792423% 74.79774570736332%, 88.36377418339146% 76.07774149373222%, 89.11274504087416% 77.40013694301064%, 89.85881214213246% 78.76198251343095%, 90.60220872059801% 80.16022332244812%, 91.34314468635935% 81.59180448751712%, 92.08185327284812% 83.05372379648162%, 92.81855605182447% 84.54297903718529%, 93.55346293337688% 86.0564099863057%, 94.28680715093702% 87.59111977246393%, 95.01882193793658% 89.14400084272621%, 95.74971720446409% 90.71205098493627%, 96.47971452227962% 92.29221531654903%, 97.20904712481487% 93.8815442957969%, 97.93793658382992% 95.47687769935742%, 99.9999300299705% 100.0%, 99.9999300299705% 50.002580849046666%, 0.0% 50.002580849046666%); */
  clip-path: polygon(
    0% 98.68808520764402%,
    0.8059381231705752% 98.73726134139748%,
    1.6118412613263986% 98.78614377193716%,
    2.4176744294527177% 98.83443879604923%,
    3.223414304206365% 98.88186548022486%,
    4.029014238901004% 98.92811735154531%,
    4.834439248521884% 98.97290709164926%,
    5.639666009725834% 99.01594738217537%,
    6.444659537498104% 99.05693813505738%,
    7.2493848468239435% 99.09559203193396%,
    8.053795291017014% 99.13161536959133%,
    8.857879208405734% 99.16472082966816%,
    9.66157829063218% 99.19460832409817%,
    10.46488087602477% 99.22098414966759%,
    11.267740317897168% 99.24356737286753%,
    12.07012163123462% 99.26205790563175%,
    12.872001492693963% 99.27616842959893%,
    13.673333255588856% 99.28559885670278%,
    14.474093596576132% 99.29006186858199%,
    15.274247530641041% 99.28926376202276%,
    16.249991253746312% 99.2807399839702%,
    16.872596237944748% 99.27076684440605%,
    17.670767687840378% 99.25285733321697%,
    18.468309407470468% 99.22939938522809%,
    19.265256381849778% 99.20058454601369%,
    20.06162027264988% 99.16662351570537%,
    20.857436064885544% 99.12770783987735%,
    21.652738743571504% 99.08403544895633%,
    22.447563293722524% 99.03581704307393%,
    23.24192137701018% 98.9832441678044%,
    24.035847978449233% 98.92652113842686%,
    24.829378083054426% 98.86584588536802%,
    25.62253501416893% 98.80141633905457%,
    26.4153537568075% 98.73344319961814%,
    27.207857634313303% 98.66211162778046%,
    28.00008163170109% 98.5876323236732%,
    28.792049072314025% 98.51020321772302%,
    29.583783279495286% 98.43002224035662%,
    30.375330899931196% 98.34728732200068%,
    31.166703595293356% 98.26220916278686%,
    31.957948012268076% 98.17497930828935%,
    32.74907581252697% 98.08579568893484%,
    33.540121981084766% 97.99486262000251%,
    34.331121502956236% 97.9023844167715%,
    35.122097701484535% 97.80855262481604%,
    35.913073900012826% 97.71357794426777%,
    36.70409674522747% 97.6176519207009%,
    37.495177898800016% 97.52097248454211%,
    38.286352345745236% 97.42375033592305%,
    39.07765507107789% 97.32617702041793%,
    39.86910939814113% 97.22845046845343%,
    40.66075031194972% 97.13078138016121%,
    41.45258947417523% 97.03336768596793%,
    42.244673531504006% 96.93640093144782%,
    43.037025807279214% 96.84008543188004%,
    43.82966962484402% 96.74462550254376%,
    44.622651630884775% 96.65021907386566%,
    45.415983487073035% 96.55706407627243%,
    46.209700178423574% 96.46535844019076%,
    47.003836689951136% 96.37531286575228%,
    47.79840468332731% 96.28711251367875%,
    48.59345080523842% 96.20097446895426%,
    49.38899837902765% 96.11708389230057%,
    50.18507072803815% 96.03565148384929%,
    50.98171449895628% 95.95686878917466%,
    51.49997084582104% 95.90716909751833%,
    52.576762953201715% 95.80802510830466%,
    53.37516763652902% 95.73820674650328%,
    54.174155403435535% 95.67157442608637%,
    54.973702930578064% 95.60820476528356%,
    55.77379855628506% 95.54819992173448%,
    56.574418957213325% 95.49163012881631%,
    57.37556413336288% 95.4385847744637%,
    58.17721076139054% 95.38915324661129%,
    58.97934717962473% 95.34341854834122%,
    59.78196172639386% 95.30147006758813%,
    60.58504274002635% 95.26337803772924%,
    61.38856689717904% 95.22924461640413%,
    62.19253419785191% 95.19914642184247%,
    62.996909657030244% 95.17317284197892%,
    63.80170493638558% 95.15140687989563%,
    64.6068850509032% 95.13393153867474%,
    65.4124383389115% 95.12083620625091%,
    66.2183648004105% 95.1122038857063%,
    67.024641112057% 95.1081239649755%,
    67.83124395050787% 95.10867944714073%,
    68.63818497743466% 95.11394695043164%,
    69.44542920782266% 95.12402224763535%,
    69.91661904817437% 95.13215654968701%,
    71.06066401558% 95.15895377551969%,
    71.86829308113025% 95.18402709118445%,
    72.67557229653299% 95.21434875558268%,
    73.48225676668494% 95.25003369605894%,
    74.28808993481125% 95.29120960966269%,
    75.09279192079393% 95.33800419344341%,
    75.89611782952967% 95.39053875959812%,
    76.69781110424368% 95.44893462032378%,
    77.49760352648948% 95.51333224237487%,
    78.29523853949225% 95.58384016824341%,
    79.09045958647714% 95.6605860949789%,
    79.88301011066928% 95.74370410448326%,
    80.67262189362224% 95.83331550895352%,
    81.45903837856119% 95.92953523573418%,
    82.24200300871127% 96.03249736672721%,
    83.02124756562606% 96.1423295989821%,
    84.16661030192068% 96.31765764791356%,
    84.56758521766511% 96.38307684636047%,
    85.33441009434291% 96.51397909177899%,
    86.09722335599585% 96.65149604436043%,
    86.85623491271238% 96.79526376751373%,
    87.61167799792423% 96.94491193979543%,
    88.36377418339146% 97.10007662461454%,
    89.11274504087416% 97.26038111567507%,
    89.85881214213246% 97.42546786123852%,
    90.60220872059801% 97.59496653986137%,
    91.34314468635935% 97.76850683010016%,
    92.08185327284812% 97.94572479536389%,
    92.81855605182447% 98.12625649906153%,
    93.55346293337688% 98.30971885004465%,
    94.28680715093702% 98.49576068142721%,
    95.01882193793658% 98.68400528691325%,
    95.74971720446409% 98.87408872991173%,
    96.47971452227962% 99.06564068897922%,
    97.20904712481487% 99.25830361237713%,
    97.93793658382992% 99.45169440895708%,
    99.9999300299705% 100%,
    99.9999300299705% 0%,
    0% 0%
  );
}

#section_Recetas .receta {
  width: 100%;
  font-size: 22px;
  text-align: center;
  /* text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.7); */
  /* font-family: 'Dancing Script', cursive; */
  font-family: "Luckiest Guy", sans-serif;
  font-family: "Paytone One", sans-serif;
  color: #5c6363;
}

#section_Recetas .receta:hover {
  font-size: 25px;
  transition: 0.5s;
}

/* estilos materialize carousel*/
.container {
  width: 100%;
}
.container-carrusel {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
}
.carousel {
  min-height: 500px;
  margin: auto;
}

.carousel .carousel-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
}

.carousel .carousel-item img {
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 15px;
}

.carousel .indicators .indicator-item {
  border-radius: 0;
  transform: rotate(45deg);
  margin: 0 15px;
  background: black;
}

@media screen and (max-width: 280px) {
  #section_Recetas {
    min-height: 100vh;
    background-image: linear-gradient(-30deg, #e3ddd9 50%, #ffc964 50%);
    font-family: "Raleway", sans-serif;
    background-size: 100% 100%;
  }
  .titulo {
    font-size: 20px;
    font-family: "Dancing Script", cursive;
    margin-bottom: 40px;
    color: rgb(10, 1, 1);
    user-select: none;
  }
  .container {
    width: 10px;
    height: 10px;
  }
  .receta {
    color: rgb(253, 253, 253);
    font-size: 20px;
    font-weight: 600;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.7);
    font-family: "Dancing Script", cursive;
  }

  .linea-division {
    width: 80%;
    height: 1px;
    background-color: #36221c;
  }
  /* estilos materialize carousel*/
  .carousel {
    width: 50px;
    background-color: #87430d;
    min-height: 50px;
  }
  .carousel .carousel-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    width: 200px;
    height: 200px;
  }
  .carousel .carousel-item img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 15px;
  }
  .carousel .indicators .indicator-item {
    border-radius: 0;
    transform: rotate(45deg);
    margin: 0 15px;
    background: black;
  }
}

@media screen and (max-width: 320px) {
  #section_Recetas {
    min-height: 100vh;
    background-image: linear-gradient(-30deg, #747474 50%, #d484bf 50%);
    font-family: "Raleway", sans-serif;
    background-size: 100% 100%;
  }
  .titulo {
    font-size: 40px;
    font-family: "Dancing Script", cursive;
    margin-bottom: 40px;
    color: #fff;
    user-select: none;
  }
  .subtitulo {
    margin: 0;
    color: #000;
    display: inline;
    font-size: 50px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .receta {
    color: #fff;
    margin: 7px 0;
    font-size: 50px;
    font-weight: 600;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.7);
    font-family: "Dancing Script", cursive;
    margin-top: 0;
  }
  .linea-division {
    width: 80%;
    height: 2px;
    background-color: #36221c;
  }
  /* estilos materialize carousel*/
  .carousel {
    min-height: 500px;
  }
  .carousel .carousel-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    width: 500px;
    height: 500px;
  }
  .carousel .carousel-item img {
    display: inline;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 15px;
  }
  .carousel .indicators .indicator-item {
    border-radius: 0;
    transform: rotate(45deg);
    margin: 0 15px;
    background: black;
  }
}

@media screen and (max-width: 540px) {
  body {
    min-height: 100vh;
    /* background-image: linear-gradient(-45deg, #e3ddd9 50%, #ffc964 50%); */
    font-family: "Raleway", sans-serif;
    background-size: 100% 100%;
  }
  .titulo {
    font-size: 40px;
    font-family: "Dancing Script", cursive;
    margin-bottom: 40px;
    color: #fff;
    user-select: none;
  }
  .subtitulo {
    margin: 0;
    color: #000;
    display: inline;
    font-size: 50px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .receta {
    color: #fff;
    margin: 7px 0;
    font-size: 50px;
    font-weight: 600;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.7);
    font-family: "Dancing Script", cursive;
    margin-top: 0;
  }
  .linea-division {
    width: 80%;
    height: 2px;
    background-color: #36221c;
  }
  /* estilos materialize carousel*/
  .carousel {
    min-height: 500px;
  }
  .carousel .carousel-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    width: 500px;
    height: 500px;
  }
  .carousel .carousel-item img {
    display: inline;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 15px;
  }
  .carousel .indicators .indicator-item {
    border-radius: 0;
    transform: rotate(45deg);
    margin: 0 15px;
    background: black;
  }
}

/*_____________________________________________________________________________________*/
/*____________________________________ productos _________________________________________*/
/*_____________________________________________________________________________________*/

#section_productos {
  width: 100%;
  /* background: rgba(218, 217, 217, 0.515); */
  display: flex;
  flex-direction: column;
}

.grid-container {
  margin: auto;
  display: grid;
  width: 900px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-bottom: 80px;
}
.grid-card {
  box-shadow: 1px 1px 4px 4px rgb(220, 220, 220);
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
  margin: 10px;
}
.grid-card:hover {
  background-color: var(--azul-bg-color);
}

.grid-card .categoria {
  width: 100%;
  text-align: center;
  font-weight: 900;
}

.grid-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center center;
  border-radius: 15px 15px 0px 0px;
}

.grid-card:nth-child(4) img {
  height: 450px;
}
.grid-card:first-child {
  grid-column: 1 / 3;
}

.grid-card:nth-child(4) {
  grid-column: 3 / 4;
  grid-row: 1/3;
}

@media screen and (max-width: 1100px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    width: 600px;
  }
  .grid-container img {
    height: 230px;
  }
  .grid-card:nth-child(4) img {
    height: 230px;
  }
  .grid-card:nth-child(4) {
    grid-column: 1 / 3;
    grid-row: 3/4;
  }
}

@media screen and (max-width: 860px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    width: 80%;
  }
  .grid-card:first-child {
    grid-column: auto;
  }
  .grid-card:nth-child(4) {
    grid-column: auto;
    grid-row: auto;
  }
  .grid-card:nth-child(4) img {
    height: 230px;
  }
}

/*__________________________________________________________________________________________*/
/*____________________________________ interactiva _________________________________________*/
/*__________________________________________________________________________________________*/

#section_interactiva {
  width: 100%;
  background: rgba(255, 255, 255, 0.515);
  overflow: hidden;
}

#section_interactiva .bg {
  width: 100%;
  background: #9c8b57;
  clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0% 100%);
  display: flex;
  flex-direction: column;
}

.slider-container {
  width: 100%;
  display: flex;
  margin-bottom: 10px;
}

.contenido-slider {
  width: 100%;
  margin: 5px 0px 5px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.contenido-slider > img {
  width: 350px;
}
.contenido-slider > .description {
  width: 20%;
  padding-left: 50px;
}

.contenido-slider .description > h2 {
  font-size: 40px;
  font-weight: 600;
  color: var(--amarillo-bg-color);
  text-align: center;
}

#section_interactiva a {
  width: 400px;
  border-radius: 5px;
  font-size: 40px;
  font-weight: 600;
  color: rgb(255, 255, 255);
  text-align: center;
  margin: auto;
  margin-bottom: 50px;
  text-decoration: none;
  border: 1px solid #c2c2c2;
}

#section_interactiva a:hover {
  background-color: var(--amarillo-bg-color);
  color: black;
}

/*_____________________________________________________________________________________*/
/*____________________________________ SERVICIOS _________________________________________*/
/*_____________________________________________________________________________________*/
#section_servicios div {
  width: 900px;
  height: 0px;
  background-color: rgb(0, 26, 255);
}

/*_____________________________________________________________________________________*/
/*____________________________________ LOGO _________________________________________*/
/*_____________________________________________________________________________________*/

._0 {
  background-color: #87430d;
  width: var(--widthLogo);
  height: var(--heightLogo);
  clip-path: polygon(
    99.52921818223369% 69.10225734210951%,
    99.16952970064472% 68.7020495746728%,
    98.98289289586681% 68.54348025594375%,
    98.67424386701302% 68.21971879491102%,
    98.64262987763227% 68.13267597078767%,
    98.6395827461257% 67.98546006390077%,
    98.77505313435563% 67.67607959120149%,
    99.0255527369589% 67.351845071342%,
    99.35997541980583% 66.94293302149295%,
    99.52515534022491% 66.68416984325668%,
    99.67687709648995% 66.34867652332039%,
    99.77121120938111% 66.01271014455732%,
    99.85526125343755% 64.7299638299221%,
    99.89233468676758% 63.98934293075081%,
    100.03313755513403% 62.159646000618764%,
    100.04519911734755% 61.24229032377092%,
    100% 60.54869147197931%,
    99.89385825252086% 59.863040008477206%,
    99.71395052981998% 59.19195875683925%,
    99.44758045061995% 58.54216515240536%,
    99.24062943579821% 58.164853432183705%,
    98.62218870377565% 57.32820159118067%,
    98.09224174925663% 56.76251784614424%,
    97.51938102601996% 56.219162477730755%,
    96.43676059449535% 55.259609953536156%,
    95.77578698519348% 54.68938484376286%,
    95.11532123114269% 54.23345074653413%,
    94.72097162866639% 54.02710248630258%,
    94.30338764845243% 53.852354555698426%,
    94.19470662471781% 53.7931275905884%,
    94.27151973144613% 53.669943072100786%,
    94.40305424148008% 53.54429864771404%,
    94.7224951944197% 53.239648763282304%,
    95.27237546754424% 52.69865868900261%,
    95.83660265151227% 52.055204072847275%,
    96.15401218344746% 51.609393434511155%,
    96.52703186537771% 50.98126592434275%,
    96.85269404514324% 50.307535543274945%,
    97.10255882868265% 49.65736349177966%,
    97.29681346222698% 48.98949904016364%,
    97.48230759268993% 47.94186296242683%,
    97.53766381505943% 46.96774022636811%,
    97.48027617168555% 45.60476313471485%,
    97.36131107911622% 44.42854966786539%,
    97.13633120288054% 42.861873445410424%,
    96.97394448634249% 42.191359864364564%,
    96.68332431890262% 41.39425574127845%,
    96.43523702874205% 40.9077620438412%,
    96.04596597877672% 40.2989353338045%,
    95.59041981854331% 39.707706412123166%,
    95.08167582075757% 39.1300069728871%,
    94.48189876921279% 38.511529862784556%,
    92.74884272484655% 36.92309293429875%,
    91.26273129632591% 35.7658018205196%,
    90.92449969909576% 35.532867654224276%,
    90.29374347723412% 35.15252835751137%,
    89.55900389271049% 34.80889842575483%,
    89.12897745884467% 34.6489099305455%,
    88.64461051311154% 34.49582809420683%,
    88.09638076955305% 34.34870679908529%,
    87.8943813434295% 34.28370851628884%,
    88.12443977217612% 34.14349388003795%,
    88.39728500582763% 33.872809619367416%,
    88.48717538527168% 33.720390065386184%,
    88.83911907428144% 32.933220177661966%,
    89.0230896389911% 32.31758142051996%,
    89.13849974480273% 31.560971133004273%,
    89.13430993898118% 30.87626578715569%,
    88.99211046867421% 30.07831015818141%,
    88.81118703547115% 29.543091401588157%,
    88.14983253473095% 28.082380356326823%,
    87.67181377963652% 26.940605572065294%,
    87.38551038183097% 26.29317726176521%,
    87.01579175903284% 25.60374132764906%,
    86.64404171523032% 25.05556075920265%,
    86.1757991737195% 24.46934626108495%,
    85.49971687069751% 23.710559902966168%,
    84.06972344742302% 22.223452175171786%,
    82.48102525818092% 20.829915483310018%,
    81.62338470289198% 20.206802396705243%,
    80.22310081180662% 19.326061473048412%,
    78.25122583561233% 18.259881489302714%,
    77.22370769883167% 17.74982946229295%,
    75.40279269602578% 16.868426256278667%,
    72.66139005060776% 15.475457235008989%,
    71.9018925225932% 15.06124692630027%,
    68.36417284345615% 12.932292982361517%,
    66.3220868787978% 11.60129466739707%,
    64.26590793092153% 10.20302738726771%,
    62.68419275138199% 8.98357634365263%,
    61.802682999291534% 8.187607561750738%,
    61.265499107444384% 7.634696405036749%,
    60.93894818098945% 7.262777555440124%,
    58.98865705296675% 4.674861937781401%,
    58.60116349638026% 4.232835770059353%,
    57.921907098038915% 3.57178336554864%,
    56.58548600477891% 2.4937769111340202%,
    55.35330220180644% 1.6257139640342757%,
    54.64954178759969% 1.1894591139986517%,
    54.201232564694415% 0.937697206398397%,
    53.117469458854835% 0.4271721205618775%,
    52.277730801167046% 0.1532710598693825%,
    51.93975313156244% 0.0773924240574928%,
    51.38479430592692% 0.001703011776328367%,
    50.924550484620866% 0%,
    50.514076477922266% 0.05903774157931707%,
    50.024884907303715% 0.2292443074466064%,
    49.84383451028787% 0.3411700258573802%,
    49.70519002673857% 0.4748564502990149%,
    49.65376968256508% 0.5532896037753829%,
    49.59562025631455% 0.8011724289962388%,
    49.80130163300856% 1.3038447383085838%,
    49.94718305388598% 1.4422617510177815%,
    50.29277855225703% 1.6642209525323324%,
    50.68611244423115% 1.8896807893648742%,
    50.98435044043747% 2.119776602699659%,
    51.276113282192306% 2.4937769111340202%,
    51.36714633595133% 2.736834536321922%,
    51.39964907202149% 3.082640538681545%,
    51.32524827773588% 3.4640205648133247%,
    51.194094659140255% 3.750031931470815%,
    50.986127933816306% 4.052789580595501%,
    50.31740953193521% 4.745442314733609%,
    49.29446209241442% 5.6904246270640755%,
    48.08094196991973% 6.7032435751515465%,
    47.628442941192894% 7.038263836261095%,
    46.737537866957155% 7.626938240277937%,
    46.00889254544669% 8.045500690192824%,
    45.245459139236125% 8.42934062222372%,
    44.44977692458095% 8.774200506929844%,
    43.69561187670289% 9.05188603823639%,
    41.92472061612999% 9.592119218393279%,
    40.99166355605325% 9.912285432342642%,
    40.30593200326042% 10.209744822607675%,
    39.55417926782508% 10.598599178202193%,
    38.60741011596874% 11.15709242907191%,
    37.42423434472706% 11.919095587212652%,
    36.116380109341236% 12.884514040859031%,
    35.51799965973698% 13.400621220851292%,
    34.96723063992301% 13.943219695141963%,
    34.620746394862536% 14.332357886032568%,
    34.022238981445504% 15.11129655017119%,
    33.120668946936746% 16.30132333476196%,
    32.62969988293936% 16.82206649125645%,
    31.97799463196999% 17.360785883167708%,
    31.228654208977353% 17.8471849688396%,
    30.546350679129436% 18.212102547800228%,
    28.98368007150601% 18.923677635008616%,
    28.008597989401064% 19.366649920384205%,
    25.98682623478656% 20.482595692704763%,
    24.619299007396908% 21.39512616951967%,
    23.824251611805604% 21.975380126420248%,
    22.073293669838222% 23.371849783007917%,
    20.91068603626594% 24.428568590218475%,
    19.84837981478519% 25.53959455074076%,
    19.350554704898006% 26.130918084187442%,
    18.100469004324385% 27.942449555372008%,
    17.441272888401347% 29.221979069985267%,
    16.863079685028172% 30.793102045411743%,
    16.603184760279625% 31.883218805791387%,
    16.414389570684563% 33.243262932718736%,
    16.346971786101523% 35.22329795799426%,
    16.373253295345762% 35.96902789249454%,
    16.53551304807104% 37.319327007590694%,
    16.696757090294124% 37.99040825922867%,
    16.927450338104634% 38.65893499320213%,
    17.305548572545852% 39.44421264561934%,
    17.649620505163618% 40.37784154610763%,
    17.558714415217374% 40.63338792432194%,
    17.31913370051268% 40.93378027931285%,
    16.992201882619415% 41.195381810509666%,
    16.6199439835658% 41.40929901196934%,
    16.22432474296176% 41.58187087197041%,
    15.261939042134209% 41.91433661541547%,
    14.5776040912819% 42.166855417138535%,
    13.780144383247887% 42.49979421941036%,
    12.388747959056708% 43.14069431790121%,
    10.671181499848911% 43.9649520176432%,
    9.167549065165446% 44.748526658284064%,
    7.427002155845541% 45.8236001479728%,
    6.45712559006432% 46.55930123534582%,
    5.29451795649204% 47.61223557194232%,
    4.251764162178496% 48.74369767378052%,
    2.9162318156079152% 50.507734038758656%,
    2.4843009245504843% 51.16802954914655%,
    1.750704014341832% 52.43185351071147%,
    1.128962223187147% 53.723587943055065%,
    0.6311371132999671% 55.04011065792075%,
    0.26890935545550804% 56.37848869058262%,
    0.11299779336893397% 57.25052533182711%,
    0% 59.10425365035844%,
    0.12023473069705673% 60.46950142438013%,
    0.30369744015560685% 61.366799406973456%,
    0.9267088694380328% 63.133106454320014%,
    1.5907296102464874% 64.41187907481047%,
    2.8448781528288802% 66.24015682846225%,
    3.32276994411053% 66.82693899717205%,
    4.333021002353909% 67.9641724166967%,
    5.386058865502155% 69.07898284783306%,
    43.1180534923936% 100%,
    62.2202669795055% 100%
  );
}
._2 {
  background-color: var(--piel-bg-color);
  width: var(--widthLogo);
  height: var(--heightLogo);
  clip-path: polygon(
    18.632193452222246% 43.19793443593885%,
    23.994129193297322% 47.14447500404465%,
    26.897283736189507% 48.73764252079803%,
    30.05525465131928% 50.01868582365691%,
    33.4755328036403% 51.00927100688679%,
    37.0448664721581% 51.697193152757315%,
    40.67463491555637% 52.10109077904273%,
    44.33144665107551% 52.286624450896966%,
    59.00097254280584% 52.10146922610414%,
    73.67595787848546% 52.21869320337461%,
    77.35524220886563% 52.3629761455356%,
    80.99148580671536% 52.685034594792%,
    84.54825005776853% 53.292536740113775%,
    88.07797101670081% 54.14707020476824%,
    91.44720971628666% 55.30663200091584%,
    92.94754109183799% 56.08131313561366%,
    94.26415583030524% 57.024024765575696%,
    95.04358667692534% 57.634554487388726%,
    95.47107383453567% 58.05425227848783%,
    96.3977827039737% 59.24815814545802%,
    96.93483963200808% 60.59457817817477%,
    97.13823566007216% 61.94071437559546%,
    97.06688199729312% 63.201699984199834%,
    96.78616500724964% 64.55199909929598%,
    96.28910168023909% 66.04166134475486%,
    95.99733883848425% 66.1086464746237%,
    95.59981514068858% 65.95490235592757%,
    94.6905003136006% 65.47370691735%,
    92.90742052700138% 64.98664554932064%,
    91.12040486220616% 64.95154458437524%,
    89.24794255141398% 65.07605366757778%,
    87.4299477163019% 65.38761021088015%,
    85.90523928869793% 66.06257054489754%,
    84.52019105514546% 66.97065426874093%,
    83.68527702234309% 67.26272078838092%,
    82.86204366031595% 66.97595252760061%,
    81.3014044736969% 66.1757262162579%,
    79.70254917943286% 65.59244468286609%,
    77.95628889853813% 65.18845244481531%,
    76.08852424881859% 64.95684284323494%,
    74.21656979327751% 64.98645632578993%,
    72.52668144525447% 65.44995936424678%,
    71.08919715702629% 66.31300788778287%,
    69.71506781137239% 67.19933090559543%,
    68.92421022160264% 67.58998288473165%,
    68.51056211958468% 67.60691839072956%,
    68.10808683309084% 67.44342926020222%,
    66.7154207707719% 66.41197179434052%,
    65.33062646484498% 65.61146164770173%,
    63.594015433721076% 65.14881011513306%,
    61.76560956596151% 64.9323383960089%,
    59.928443195120515% 64.99809357292817%,
    58.12365259653692% 65.36026741069358%,
    56.4900092175728% 65.93834529699106%,
    55.10775418790136% 66.73667937302676%,
    53.90642259143299% 67.97268747557834%,
    53.35057501910805% 68.70649632764433%,
    52.824690906597795% 69.21967054291069%,
    52.330928638719385% 69.24152586070689%,
    51.85290988362497% 68.75285609266655%,
    50.799618092851176% 67.26461302368796%,
    49.470941792170386% 66.21063795767259%,
    47.90078031959331% 65.5932015769889%,
    46.154393074885796% 65.2255402568331%,
    44.30859316477617% 65.03991197321352%,
    42.44692277806979% 65.0418988202859%,
    40.65279713975922% 65.24143503341215%,
    39.0054416690155% 65.78791259008223%,
    38.25991016040607% 66.29673466414242%,
    37.573924679987705% 66.98115617469495%,
    36.92425085002272% 67.58941521413954%,
    36.275973621998254% 67.77069135655296%,
    34.92787185796304% 66.77745704389324%,
    33.52149370386452% 65.8885795084162%,
    31.92251144578772% 65.35345536358828%,
    28.216183823286684% 65.058077432161%,
    26.379144416258477% 65.15051312690937%,
    24.682019130907307% 65.55601915320577%,
    23.1389009504511% 66.28443513464674%,
    21.68681582375391% 67.19658716440024%,
    21.27253290267208% 67.28410304735036%,
    20.81508228524706% 67.15467415234954%,
    20.06510704319055% 66.74841123193033%,
    18.639049498112048% 65.90996176738562%,
    16.94268599563752% 65.35932129304007%,
    15.139672890432768% 65.14436336216154%,
    11.428647606859093% 65.34125044585795%,
    9.693306213862924% 65.7406067074065%,
    8.165296727126833% 66.48945883016336%,
    7.406560981988912% 66.78105229097659%,
    6.687945801687602% 66.47763235949444%,
    5.458047347345059% 65.0678224439922%,
    4.554191964206362% 63.76700528217486%,
    3.9285142948556797% 62.5843582152815%,
    3.2905211356659123% 60.048952127392845%,
    3.2929334481086197% 57.247781590631924%,
    3.8278319913258323% 54.49136241888223%,
    4.986884638140436% 51.908555836552495%,
    5.900516234862739% 50.67292618106232%,
    6.908354980663411% 49.54155869098946%,
    9.355201580445542% 47.563983571613065%,
    12.11856896547346% 45.94669005469506%,
    15.330372537219441% 44.12475128932183%,
    17.04705024973782% 43.30380500136714%,
    17.86736344407117% 43.12555643544497%,
    18.632193452222246% 43.19793443593885%
  );
}
._5 {
  background-color: var(--azul-bg-color);
  width: var(--widthLogo);
  height: var(--heightLogo);
  clip-path: polygon(
    95.04358667692534% 57.634554487388726%,
    94.26415583030524% 57.024024765575696%,
    92.94754109183799% 56.08131313561366%,
    91.44720971628666% 55.30663200091584%,
    88.07797101670081% 54.14707020476824%,
    84.54825005776853% 53.292536740113775%,
    80.99148580671536% 52.685034594792%,
    77.35524220886563% 52.3629761455356%,
    73.67595787848546% 52.21869320337461%,
    59.00097254280584% 52.10146922610414%,
    44.33144665107551% 52.286624450896966%,
    40.67463491555637% 52.10109077904273%,
    37.0448664721581% 51.697193152757315%,
    33.4755328036403% 51.00927100688679%,
    30.05525465131928% 50.01868582365691%,
    26.897283736189507% 48.73764252079803%,
    23.994129193297322% 47.14447500404465%,
    18.632193452222246% 43.19793443593885%,
    17.86736344407117% 43.12555643544497%,
    17.04705024973782% 43.30380500136714%,
    15.330372537219441% 44.12475128932183%,
    12.11856896547346% 45.94669005469506%,
    9.355201580445542% 47.563983571613065%,
    6.908354980663411% 49.54155869098946%,
    5.900516234862739% 50.67292618106232%,
    6.428177840751828% 53.06934758564966%,
    8.333777706678044% 54.97407164570542%,
    11.194272408478136% 56.43913483217292%,
    14.30488582144317% 57.604467946006956%,
    17.364713709298574% 58.546990352438286%,
    20.428477475349975% 59.28770586337493%,
    23.56016688123551% 59.84619911424465%,
    26.775525439739162% 60.24792066992699%,
    30.049922171182764% 60.52343013063046%,
    33.35758342157318% 60.70319248479826%,
    36.672735536917266% 60.817861944404235%,
    39.97493734335839% 60.893929803746815%,
    43.26355402183269% 60.94170874524931%,
    46.543283233412815% 60.96753775719026%,
    49.81831478392028% 60.978039663144266%,
    53.09296544298944% 60.97964806315524%,
    56.371932871692906% 60.97889116903244%,
    59.65762938247341% 60.978985780797785%,
    62.94840444576486% 60.97416058076487%,
    66.24133789387349% 60.956562792409485%,
    69.53350955910545% 60.91862347450355%,
    72.82225320139253% 60.85258446228822%,
    76.10464865304091% 60.750876814535395%,
    79.37802967398233% 60.60574236648624%,
    82.63947609652296% 60.409612176912646%,
    85.8877182825351% 60.15018671631891%,
    89.14713328407137% 59.7369225252637%,
    92.32478359018111% 58.98154219069758%
  );
}
._3 {
  position: relative;
  left: 0px;
  top: -268px;
  background-color: var(--piel-bg-color);
  width: var(--widthLogo);
  height: var(--heightLogo);
  clip-path: polygon(
    31.982692293042636% 20.358843503625053%,
    32.47531188660607% 21.33845372207415%,
    32.882230906547015% 22.61807784845277%,
    34.505336289050895% 24.580231250076864%,
    39.26228946225746% 27.356329669019658%,
    44.571281293405754% 29.60430521377056%,
    50.219139540848055% 31.315548213682547%,
    62.02563145452283% 33.536086346481525%,
    73.90614327104488% 35.54516718371997%,
    79.86366625784319% 36.55022796704861%,
    86.04870839713263% 36.13317930537935%,
    87.41648955214785% 36.46242824880246%,
    88.60017317864062% 37.222066112809394%,
    90.67895168519068% 38.875406712326296%,
    92.71646695258916% 40.58229757103214%,
    94.08120097609779% 42.54691087855539%,
    94.30161015507359% 47.16046439238906%,
    93.87869369472313% 49.37135212512217%,
    92.49669259267723% 51.38752884476196%,
    91.40124881606243% 52.245468332969075%,
    90.04959206526955% 52.476510263957366%,
    87.04918324179243% 51.551396422350706%,
    81.23055866616896% 50.5105723917192%,
    69.04546066280189% 49.85235834016903%,
    56.90187982621193% 49.87005074028975%,
    44.71589307615543% 50.0532191180102%,
    38.628105217450916% 49.91376137588214%,
    32.67274061546978% 48.87577569821118%,
    27.325532676676495% 46.641235024140194%,
    23.224601524073606% 43.25157930689313%,
    20.669708719620733% 39.11477447866552%,
    19.564996584673437% 34.646828471707764%,
    19.418607308544917% 32.364698079665004%,
    19.82946220668185% 30.1227776878966%,
    21.030539875524674% 27.995810591030235%,
    22.760294860758783% 26.053904107191357%,
    26.68068347159692% 22.90219697980322%,
    29.220467582329686% 21.330979392611397%,
    30.770187881050138% 20.514669081158914%,
    31.982692293042636% 20.358843503625053%
  );
}
._6 {
  background-color: var(--azul-bg-color);
  width: var(--widthLogo);
  height: var(--heightLogo);
  clip-path: polygon(
    94.08120097609779% 42.54691087855539%,
    92.71646695258916% 40.58229757103214%,
    90.67895168519068% 38.875406712326296%,
    88.60017317864062% 37.222066112809394%,
    87.41648955214785% 36.46242824880246%,
    86.04870839713263% 36.13317930537935%,
    79.86366625784319% 36.55022796704861%,
    73.90614327104488% 35.54516718371997%,
    62.02563145452283% 33.536086346481525%,
    50.219139540848055% 31.315548213682547%,
    44.571281293405754% 29.60430521377056%,
    39.26228946225746% 27.356329669019658%,
    34.505336289050895% 24.580231250076864%,
    32.882230906547015% 22.61807784845277%,
    32.47531188660607% 21.33845372207415%,
    31.982692293042636% 20.358843503625053%,
    30.770187881050138% 20.514669081158914%,
    29.220467582329686% 21.330979392611397%,
    26.68068347159692% 22.90219697980322%,
    22.760294860758783% 26.053904107191357%,
    21.030539875524674% 27.995810591030235%,
    19.82946220668185% 30.1227776878966%,
    19.418607308544917% 32.364698079665004%,
    21.423873767498787% 34.15787486837138%,
    23.515602582951807% 35.871956221243934%,
    25.779875219964804% 37.42784670244883%,
    28.281824114490888% 38.763954052742264%,
    30.98805778377047% 39.89702455459147%,
    33.838268416735865% 40.8658490317905%,
    36.771767310881046% 41.70959675519489%,
    39.736880194406986% 42.460908783850904%,
    42.722180324164% 43.12555643544497%,
    45.72754073633932% 43.70155286290471%,
    48.75296143093295% 44.187195054453795%,
    51.79806151650656% 44.5804015512545%,
    54.862460101621835% 44.88202385919499%,
    57.94323701858496% 45.107199860731484%,
    61.03683728063827% 45.2759872501185%,
    64.13995982864964% 45.40825449807985%,
    67.24892271204861% 45.523870075339346%,
    70.36029790789028% 45.64071560554841%,
    73.4710382846681% 45.74791073569162%,
    76.57847760231378% 45.81376052437625%,
    79.67969569313354% 45.80609697138278%,
    82.77215328087189% 45.692752076491715%,
    85.85229537877113% 45.4401386630033%,
    88.88825406982501% 44.95809171853756%,
    91.77896615906533% 44.07508011251231%
  );
}

._4 {
  position: relative;
  left: 0px;
  top: -536px;
  background-color: var(--piel-bg-color);
  width: var(--widthLogo);
  height: var(--heightLogo);
  clip-path: polygon(
    54.17571283832682% 3.020480608845631%,
    54.66249209650266% 3.2780138341323237%,
    55.43722528205011% 4.141062357668417%,
    56.653538608425826% 5.993087664423427%,
    58.3897687481114% 8.745722365559033%,
    61.42598136679083% 11.312444947779028%,
    64.66660572403653% 13.591074704503797%,
    78.92895866820038% 21.50317280555106%,
    82.28359652931721% 23.682176373360747%,
    83.09629189488412% 24.480888896457827%,
    84.8398859357106% 26.447015992226696%,
    85.57475248404698% 28.00669094404566%,
    85.91158747933663% 29.630323449242198%,
    86.11917331322226% 31.36711162579911%,
    85.67264158369579% 32.95223714249761%,
    83.924730773235% 33.98057242010272%,
    81.73714427913755% 34.37491425808766%,
    77.28490425658879% 34.066101455980444%,
    68.59486609126665% 32.647398034535186%,
    59.861406301975805% 31.29634202531622%,
    51.33553234657058% 29.340811447266717%,
    43.18889929992154% 26.78449615923539%,
    39.2709230015261% 25.017242994235303%,
    37.482002879539266% 23.924193269129788%,
    36.06787993286154% 22.64702904865031%,
    35.2460431727749% 21.15310927375063%,
    35.07007132827001% 19.48737453297268%,
    35.39611439947386% 17.78824183902566%,
    36.12514061242265% 16.173029780945384%,
    37.24153341814515% 14.720455347504284%,
    38.73513571161947% 13.505640280391432%,
    39.9156452427929% 12.947620088348472%,
    42.50037454324768% 11.71473417405349%,
    50.28173270054569% 8.443532387026451%,
    52.12715171921698% 7.464584450934808%,
    53.60767673997556% 6.292723125291516%,
    54.28896455932129% 4.686309961388929%,
    54.17939478889726% 3.6540009896390586%,
    54.17571283832682% 3.020480608845631%
  );
}
._7 {
  background-color: var(--azul-bg-color);
  width: var(--widthLogo);
  height: var(--heightLogo);
  clip-path: polygon(
    83.09629189488412% 24.480888896457827%,
    82.28359652931721% 23.682176373360747%,
    78.92895866820038% 21.50317280555106%,
    64.66660572403653% 13.591074704503797%,
    61.42598136679083% 11.312444947779028%,
    58.3897687481114% 8.745722365559033%,
    56.653538608425826% 5.993087664423427%,
    55.43722528205011% 4.141062357668417%,
    54.66249209650266% 3.2780138341323237%,
    54.17571283832682% 3.020480608845631%,
    54.17939478889726% 3.6540009896390586%,
    54.28896455932129% 4.686309961388929%,
    53.60767673997556% 6.292723125291516%,
    52.12715171921698% 7.464584450934808%,
    50.28173270054569% 8.443532387026451%,
    42.50037454324768% 11.71473417405349%,
    39.9156452427929% 12.947620088348472%,
    39.86854166825371% 14.764639041923417%,
    40.10482132382628% 16.528580795136193%,
    40.848702302869626% 18.19251791237248%,
    42.07212560276069% 19.734973522897462%,
    43.68050318298278% 21.141093579550997%,
    45.57899307539365% 22.396213258703582%,
    47.672753311851054% 23.485573124960382%,
    49.87011601953211% 24.39583291940687%,
    52.123850660084855% 25.135034642097878%,
    54.421641743670214% 25.727588128494133%,
    56.75218949095129% 26.19856549641375%,
    59.104067158778406% 26.572849640144142%,
    61.4658480040019% 26.875512677503494%,
    63.82623224728488% 27.13153211454457%,
    66.17417403691599% 27.365128563197345%,
    68.51525978065732% 27.581316447025443%,
    70.87450134962533% 27.76060574236648%,
    73.27818025306426% 27.882465696139178%,
    75.75270496403115% 27.926081719966206%,
    78.29134640044893% 27.84376948411041%,
    80.62722662786652% 27.374495127967137%,
    82.36434551424152% 26.185225237499182%
  );
}
._1 {
  position: relative;
  left: 0px;
  top: -804px;
  background-color: rgb(182 97 37);
  width: var(--widthLogo);
  height: var(--heightLogo);
  clip-path: polygon(
    50.07465472191116% 96.28431213935178%,
    49.401365622770186% 96.84384611964036%,
    48.638186144185184% 96.9007077906166%,
    46.95934364787349% 96.27541863340873%,
    36.77113249181718% 89.08492446669713%,
    33.14618867330433% 85.64607063146731%,
    14.77376318201786% 70.1023983136399%,
    17.103803074047832% 70.1023983136399%,
    40.957383326604244% 89.61106049381665%,
    41.71408765073779% 89.8591325425682%,
    41.5602075096556% 88.88482058297878%,
    28.723912110570243% 70.52975965773248%,
    31.37999507380406% 70.52975965773248%,
    37.75776828088458% 80.06274652278108%,
    41.701645197085924% 85.11141954546616%,
    43.79680203548384% 87.45220923202685%,
    44.55795009306447% 88.15243090739305%,
    45.54928354320451% 88.4225474974715%,
    45.621779880298504% 84.26227895143673%,
    44.20575247642916% 77.69764161252508%,
    42.72281514322787% 70.62881817605546%,
    45.3921023429902% 70.62881817605546%,
    46.77613486604048% 77.91856008462076%,
    47.96248473260151% 81.82120079360348%,
    49.44529510199003% 85.06108608629917%,
    50.33061376846371% 87.10962002968917%,
    51.02891473872116% 88.03416620070372%,
    51.57193896595592% 88.4675826977788%,
    51.882365488188555% 88.66986265210024%,
    52.464240642132175% 88.81433481779193%,
    53.046115796075796% 88.78538361759438%,
    53.78314072922935% 88.55424707484075%,
    54.40373984606908% 87.83198085814763%,
    55.916640639085045% 85.26043307589472%,
    57.19681676328613% 81.822146911257%,
    58.321716144464496% 77.08370586715941%,
    59.60189226866558% 70.66940662339124%,
    61.50266750970638% 70.66940662339124%,
    60.88194142905389% 74.10769278802897%,
    59.7957660107716% 78.8462284438919%,
    58.942442225116984% 84.88482436744938%,
    59.02001711472196% 87.08066882949163%,
    59.330316673141816% 88.17863836639542%,
    59.67946715827054% 88.38091832071686%,
    60.1837674226092% 88.26530274345735%,
    61.8518179948351% 86.73401132124384%,
    66.97937853752923% 80.64612266793824%,
    73.67862411855373% 70.29710932673322%,
    76.46992354239194% 70.29710932673322%,
    71.94175915980428% 76.67280697023799%,
    67.5997237267434% 83.2333760032395%,
    65.55268617338686% 87.06808546469988%,
    65.26155815069589% 87.77010476360778%,
    65.31018529098836% 88.00578267109827%,
    65.48057072773116% 88.15082250738209%,
    65.94309989766715% 88.11449158948712%,
    66.5758875405332% 87.77010476360778%,
    70.22685894066473% 84.88766272040993%,
    87.98262119330748% 70.77679097706516%,
    90.78775967273806% 70.77679097706516%,
    87.10987194429843% 73.8875312100561%,
    75.75930708229541% 83.23242988558599%,
    70.27370858757837% 87.87540765844396%,
    66.9075170194991% 90.84697398460288%,
    62.39788935357644% 93.82204094607981%,
    59.07867439622358% 95.36345582718593%,
    56.93108150314997% 96.09054724391197%,
    54.19767757793673% 96.23596552725718%,
    51.77673159596053% 96.32319757491123%
  );
}

/********************************************   footer     ************************************************/
.footer_section {
  background-color: #273135;
  padding: 50px;
  font-family: "Dosis", sans-serif;
  font-weight: 500;
}

.footer_section p {
  color: #fbfcfd;
  margin: 0;
  text-align: center;
  margin-bottom: 10px;
}

.footer_section a {
  color: #fbfcfd;
}

.contactanosFooter {
  font-size: 20px;
  font-weight: 900;
  color: var(--cafe-bg-color);
}

.contactanosFooter img {
  width: 30px;
  height: 30px;
  margin: 10px;
  border-radius: 50%;
  box-shadow: 1px 1px 5px 1px #6f6f6f85;
}

.container-iconos {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
}

.contactanosFooter img:hover {
  box-shadow: 1px 1px 4px 1px #3f3f3f85;
  width: 40px;
  height: 40px;
  transition: all 0.5s;
}