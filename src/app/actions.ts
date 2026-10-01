'use server';

const bancoMemoria: any[] = [];

export async function cadastrarUsuario(formData: FormData) {
    const email = formData.get('floating_email') as string;
    const senha = formData.get('floating_password') as string;
    const nome = formData.get('floating_first_name') as string;
    const telefone = formData.get('floating_phone') as string;

    const usuario = {
        nome,
        email,
        senha,
        telefone,
    };

    bancoMemoria.push(usuario);
    console.log('--- BANCO DE DADOS EM MEMÓRIA ---');
    console.log(bancoMemoria);
}


export async function cadastrarPaciente(formData: FormData) {
    const tutorName = formData.get('tutorName') as string;
    const phone = formData.get('phone') as string;
    const address = formData.get('address') as string;
    const email = formData.get('email') as string;
    const cpf = formData.get('cpf') as string;
    const petName = formData.get('petName') as string;
    const species = formData.get('species') as string;
    const breed = formData.get('breed') as string;
    const sex = formData.get('sex') as string;
    const complaint = formData.get('complaint') as string;

    const paciente = {
        tutorName,
        phone,
        address,
        email,
        cpf,
        petName,
        species,
        breed,
        sex,
        complaint
    };
    bancoMemoria.push(paciente);
    console.log('--- BANCO DE DADOS EM MEMÓRIA ---');
    console.log(bancoMemoria);
}