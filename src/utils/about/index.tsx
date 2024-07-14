import { Image } from 'react-bootstrap';
import Backend from '../../assets/icon/backend.svg';
import Frontend from '../../assets/icon/frontend.svg';
import Javascript from '../../assets/icon/javascript.svg';
import Typescript from '../../assets/icon/Typescript.svg';
import ReactIcon from '../../assets/icon/react.svg';
import Html5 from '../../assets/icon/HTML5.svg';
import Css from '../../assets/icon/CSS.svg'
import Bootstrap from '../../assets/icon/bootstrap.svg';
import Tailwind from '../../assets/icon/tailwind.svg';
import Nodejs from '../../assets/icon/node-js.svg'
import Express from '../../assets/icon/express-js.svg'
import Postgres from '../../assets/icon/postgres.svg'
import Mysql from '../../assets/icon/mysql.svg'
import Git from '../../assets/icon/git.svg'
import Alibaba from '../../assets/icon/alibaba-cloud.svg'
import Devops from '../../assets/icon/devops.svg'

const FrontendSkill: React.FC = () => {
   return (
      <div className="skill-set p-sm-5 p-4 rounded-4" style={{maxWidth:'416px'}}>
         <div className="fs-1 text-white fw-bold rounded-4 text-center">Frontend</div>
         <div className="d-flex justify-content-center  mt-4">
            <Image src={Frontend} alt="front-end" height={100}/>
         </div>
         <div className="text-white lh-lg text-justify mt-5">
            As a front-end developer, I am skilled at building responsive and interactive user interfaces using React and TypeScript, and have a deep understanding of modern web design principles.
         </div>
         <div className="d-flex justify-content-center gap-4 flex-wrap mt-5 align-items-end">
            <Image src={Html5} height={49}/>
            <Image src={Css} height={49}/>
            <Image src={Javascript} height={40}/>
            <Image src={Typescript} height={40}/>
            <Image src={ReactIcon} height={40}/>
            <Image src={Bootstrap} height={40}/>
            <Image className="align-self-center" src={Tailwind} width={40}/>
         </div>
      </div>
   )
}

const BackendSkill: React.FC = () => {
   return (
      <div className="skill-set p-sm-5 p-4 rounded-4" style={{maxWidth:'416px'}}>
         <div className="fs-1 text-white fw-bold rounded-4 text-center">Backend</div>
         <div className="d-flex justify-content-center  mt-4">
            <Image src={Backend} alt="back-end" height={100}/>
         </div>
         <div className="text-white lh-lg text-justify mt-5">
            Sebagai developer back-end, saya ahli dalam pembuatan API RESTful, manajemen database (SQL dan NoSQL), ORM, autentikasi dan otorisasi (JWT, session). Dokumentasi API dan Unit Testing.
         </div>
         <div className="d-flex justify-content-center gap-4 flex-wrap mt-5 align-items-end">
            <Image src={Javascript} height={40}/>
            <Image src={Typescript} height={40}/>
            <Image className="bg-white rounded" src={Nodejs} height={40}/>
            <Image className="bg-white p-1 rounded" src={Express} height={40}/>
            <Image src={Postgres} height={40}/>
            <Image className="bg-white p-1 rounded" src={Mysql} height={40}/>
            <Image src={Git} height={40}/>
         </div>
      </div>
   )
}        

const DevopsSkill: React.FC = () => {
   return (
      <div className="skill-set p-sm-5 p-4 rounded-4" style={{maxWidth:'416px'}}>
         <div className="fs-1 text-white fw-bold rounded-4 text-center">DevOps</div>
         <div className="d-flex justify-content-center  mt-4">
            <Image src={Devops} alt="back-end" height={100}/>
         </div>
         <div className="text-white lh-lg text-justify mt-5">
            Mengelola server Linux pada Alibaba Cloud dan CI/CD dengan GitHub Actions, serta sedang mempelajari manajemen konfigurasi, IaC, kontainerisasi dan orkestrasi, serta monitoring dan logging.
         </div>
         <div className="d-flex justify-content-center gap-4 flex-wrap mt-5 align-items-end">
            <Image src={Alibaba} height={40}/>
         </div>
      </div>
   )
}

export {
   FrontendSkill,
   BackendSkill,
   DevopsSkill
}



