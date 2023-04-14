import { Agenda } from "../Agenda/Agenda"
import { Btnsend } from "../Buttons/Btnsend"
export function Home (){
    return(
        <>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <img src="https://firebasestorage.googleapis.com/v0/b/musicossmm.appspot.com/o/barber.jpg?alt=media&token=f070a5ed-3ea5-4d80-b000-44a94a9c8d9a" alt="fotito" className="img-fluid w-100"/>
                    </div>
                    <div className="col-12 col-md-4">
                        <Agenda />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}