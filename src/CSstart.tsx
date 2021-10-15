import ClassStudy from './ClassStudy';

//Routerでよぶ。DBアクセスなりAPIコールなりはここで噛まして
//propsでわたす
export default function CSstart(){
    return(
        <ClassStudy name="Akiko Horino"/>
    );
}