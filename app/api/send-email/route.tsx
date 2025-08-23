import { type NextRequest, NextResponse } from "next/server"

const RESEND_API_KEY = "re_AkKyPjwF_LGrLiaAXjAAqYGG3jMLqQrp2"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 })
    }

    // Envio real do email usando Resend
    const emailData = {
      from: "contato@asielsax.com", // Você pode usar seu domínio quando configurar
      to: ["asielsax@gmail.com"],
      subject: `Nova mensagem de ${name} - Site Asiel`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #8B5CF6; padding-bottom: 10px;">
            Nova mensagem do seu site
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensagem:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #8B5CF6;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>Esta mensagem foi enviada através do formulário de contato do seu site asielsax.com</p>
          </div>
        </div>
      `,
      text: `
        Nova mensagem do seu site
        
        Nome: ${name}
        Email: ${email}
        
        Mensagem:
        ${message}
        
        ---
        Esta mensagem foi enviada através do formulário de contato do seu site.
      `,
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailData),
    })

    const result = await response.json()

    if (!response.ok) {
      console.error("Erro do Resend:", result)
      return NextResponse.json(
        {
          error: "Erro ao enviar email. Tente novamente.",
        },
        { status: 500 },
      )
    }

    console.log("Email enviado com sucesso:", result)
    return NextResponse.json(
      {
        message: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Erro interno:", error)
    return NextResponse.json(
      {
        error: "Erro interno do servidor. Tente novamente.",
      },
      { status: 500 },
    )
  }
}
