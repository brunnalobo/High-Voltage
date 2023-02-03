import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';
import acalma from '../produtosimg/acalma.png'
import biqueiras from '../produtosimg/biqueiras.png'
import carrinho from '../produtosimg/carrinho.png'
import descarpak from '../produtosimg/descarpak.png'
import eletric from '../produtosimg/eletric.png'
import fonte from '../produtosimg/fonte.png'
import kitink from '../produtosimg/kitink.png'
import pen from '../produtosimg/pen.png'
import dynamic from '../produtosimg/dynamic.png'
import './index.css';

export default function HighCard() {
  return (
    <div id="masonry-effect">
      <Grid container>
      <div className="item">
        <Grid item marginTop={3}> 
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <img src={acalma} className="App-logo" alt="logo" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            Panta NEOskin
          </Typography>
          <Typography variant="body2" color="black">
          HIDRATE E DÊ VIDA ÀS CORES DA SUA TATUAGEM!
     Panta NEOskin é o único restaurador dérmico criado para você que ama suas tattoos! Tatuagem sem cor, mal cicatrizada, descascada, ou inflamada nunca mais!
   24 HORAS DE ULTRA HIDRATAÇÃO
   Com o restaurador dérmico Panta NEOskin sua pele e sua tattoo são renovadas diariamente!
   Sua pele e suas tatuagens precisam de cuidados ao longo de toda vida e o Panta NEOskin é o único restaurador dérmico capaz de proporcionar 24 horas de ultra hidratação comprovada.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      </div>
      <div className="item">
      <Grid item marginTop={3}> 
    <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
      <img src={biqueiras} className="App-logo" alt="logo" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">    
         Kit 10 biqueiras  electric + 10 Agulhas hornet ou aston.
          </Typography>
          <Typography variant="body2" color="black">
          Biqueira Electric ink 
          Agulhas Hornet ou Aston
          MEDIDAS 9 RL
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </div>
    <div className="item">
    <Grid item marginTop={3}> 
    <Card sx={{ maxWidth: 350, }}>
      <CardActionArea>
      <img  src={carrinho} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Bancada para Tatuagem Flip One Preta/Vermelha 
          </Typography>
          <Typography variant="body2" color="black">
          Work Tattoo Station Flip One é uma bancada completa, de alta qualidade para tatuadores profissionais que necessitam de organização na sua área de trabalho.
          Armazenar todos os seus equipamentos e suprimentos ficou muito mais fácil e prático, devido seu design ser desenvolvido juntamente com a experiência de vários tatuadores.
          Sua superfície espaçosa é fabricada de aço e foi elaborada para atender a tatuadores destros e canhotos, trazendo ergonomia e bem estar para seu dia a dia.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </div>
    <div className="item">
    <Grid item marginTop={3}> 
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <img src={descarpak} className="App-logo" alt="logo" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Caixa Coletora
          </Typography>
          <Typography variant="body2" color="black">
          Desenvolvido para atender as precauções de segurança necessárias em ambientes onde são gerados resíduos perfurocortantes infectados atendendo as recomendações da RDC 222/2018 e CONAMA 358.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </div>
    <div className="item">
    <Grid item marginTop={3}> 
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <img src={eletric} className="App-logo" alt="logo" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Kit de Materiais
          </Typography>
          <Typography variant="body2" color="black">
          10 - BIQUEIRAS ELECTRIC INK (MEDIDAS MISTAS) 10 - AGULHAS HORNET/ ASTON (MEDIDAS MISTAS) 01 - VASELINA SLIP ELECTRIC INK 250g 01 - TINTA ELECTRIC INK 15ml PRETO LINHA 01 - TINTA ELECTRIC INK 15ml BRANCO REAL 10 - ELÁSTICOS PARA MÁQUINA 05 - GROMMETS BORRACHAS PARA HASTES 01 - TRANSFER AMAZON 120ml 01 - PELE ARTIFICIAL ARTPIG 01 - PAPEL HECTOGRÁFICO HORNET 10 - PROTETORES DE CABO RCA DE BRINDE! 100 - BATOQUES
          </Typography>
        </CardContent>
      </CardActionArea>   
    </Card>
    </Grid>
    </div>
    <div className="item">
    <Grid item marginTop={3}> 
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <img src={fonte} className="App-logo" alt="logo" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Fonte Aurora
          </Typography>
          <Typography variant="body2" color="black">
          Aurora 2 tatuagem fonte de alimentação características botão de toque, saídas duplas, base antiderrapante magnética, modo de pedal de 2 pés e leds coloridos que indicam a faixa de tensão atual.
          Tensão de saída entre 1.5-16 volts por incrementos de 0.1v. Dá-lhe energia suficiente. Os botões de toque facilitam a operação.
          Saída dupla permite que os artistas da tatuagem alternem entre as máquinas da tatuagem de Traço e do Sombreamento. Os pedais externos do pé só podem ser usados ao executar uma máquina.
          </Typography>
        </CardContent>
      </CardActionArea> 
    </Card>
    </Grid>
    </div>
    <div className="item">
    <Grid item marginTop={3}>  
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <img src={kitink} className="App-logo" alt="logo" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Kit Eletric
          </Typography>
          <Typography variant="body2" color="black">
          01 - PEN POP ELECTRIC INK FLEX
         (COMPATÍVEL COM CARTUCHOS DE TODAS AS MARCAS)
          01 - FONTE HURRICANE HP2
         01 - PEDAL SLIM CHAPINHA
         01 - CABO RCA PRETO RESISTENTE
         02 - TRANSFER IT MONODOSE 1ml CADA
         02 - VASELINA SLIP MONODOSE 5g CADA
         05 - CARTUCHOS HORNET MEDIDAS VARIADAS
         01 - TINTA PRETO LINHA ELECTRIC INK 15ml
         01 - PAPEL HECTOGRAFICO HORNET
         20 - BATOQUES PEQUENOS DE BRINDE!!!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </div>
    <div className="item">
    <Grid item marginTop={3}> 
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <img src={pen} className="App-logo" alt="logo" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Pen Rotative
          </Typography>
          <Typography variant="body2" color="black">
          Peso líquido: 175.2g
          Tamanho: Tamanho Completo
          Configuração: máquina de tatuagem * 1
          Cor: preto, vermelho, ouro, tira
          Parâmetros: 1. relação: relação dc 2. material: liga de alumínio 3. processo: torno processo 4. tensão de partida: 6v 8. tensão de trabalho: 8-10v
          Frequência de comutação: 55-165 hz, curso: 3.5mm, profundidade ajustável da agulha de 0-4mm.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </div>
    <div className="item">
    <Grid item marginTop={3}> 
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <img src={dynamic}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Kit de Tintas Dynamic
          </Typography>
          <Typography variant="body2" color="black">
          Uma linha de pigmentos para tatuagem de uso profissional e de qualidade superior, transforma a possibilidade em realidade, levando o trabalho do tatuador a outro nível.
          Depois de anos de pesquisa, testes com os tatuadores mais renomados do Brasil e seguindo todas as normas da ANVISA, nós conseguimos desenvolver o pigmento mais autêntico e surpreendente que existe até hoje. Feita por artistas para artistas. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </div>
    </Grid>
    </div>
  );
}