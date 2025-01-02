import { useForm, SubmitHandler } from "react-hook-form";
// import { EmailJSResponseStatus } from "@emailjs/browser"; 
import emailjs from '@emailjs/browser';

type ContactForm = {
    nom: string;
    email: string;
    sujet: string;
    message: string;
}

export const Contact = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<ContactForm>();
    const onSubmit: SubmitHandler<ContactForm> = data => {
        // console.log(data);
        //  alert(JSON.stringify(data));
        emailjs.send(
            'service_f1eae3t',//serviceId
            'template_0n7kufj',//templateId
            {
                email: data.email,
                sujet: data.sujet,
                nom: data.nom,
                message: data.message
            },
            'djrGN9VGQ7x0Gmk2z'
        ).then(
            (response)=>{
                alert('Envoir effectue avec sucess \n statut = '+response.status+'\n message= '+response.text)
            },
            (error) =>{
                alert('Echec de l\'envoie'+ error);
            },
        )
    }

    // console.log(watch("nom"))
    return (
        <main>
            <h3 className="font-extrabold text-3xl mb-4"> Contact</h3>
            <p className="text-[#009F00] font-bold">
                Email: contact@graven.com
            </p>

            <form className="mt-7" onSubmit={handleSubmit(onSubmit)}>

                <div className="flex mb-4">
                    <div className="mr-5">
                        <label className="block mb-2" htmlFor="nom">Nom</label>
                        <input {...register("nom",{required: true })} className='border block' name="nom" id="nom" type="text" placeholder="Quel est votre nom" />
                        {errors.nom && <span className="text-[red]">Votre nom est obligatoire</span>}
                    </div>
                    <div className="ml-5">
                        <label className=" block mb-2" htmlFor="email">Email</label>
                        <input {...register("email",{required: true})} className='border block' name="email" id="email" type="email" placeholder="Quel est votre email" />
                        {errors.email && <span className="text-[red]">votre email est obligatoire</span>}
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block mb-2" htmlFor="sujet">Sujet</label>
                    <input {...register("sujet",{required: true})} className='border block' name="sujet" id="sujet" type="text" placeholder="Quel est le sujet du mail" />
                    {errors.sujet && <span className="text-[red]">le sujet du mail est obligatoire</span>}
                </div>

                <div className="mb-4">
                    <label className="block mb-2" htmlFor="message">Message</label>
                    <textarea {...register("message",{required: true , minLength: 20})} className='border block' name="message" id="message" cols={60} rows={4} placeholder="ecrivez votre message"></textarea>
                    {errors.message && <span className="text-[red]">le message est obligatoire</span> && <span className="text-[red]">Le message doit contenir aumoins 20 caracteres</span>}
                </div>

                <div className="flex justify-around mb-5 mt-2">
                    <input className='bg-[red] text-[white] px-3 py-3 hover:bg-[#990201] ' type="reset" value="annuler" />
                    <input className='bg-[blue] text-[white] px-3 py-3 hover:bg-[#010199]' type="submit" value="Envoyer" />
                </div>
            </form>
        </main>

    );
}