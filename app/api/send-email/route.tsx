import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 })
    }

    // Usar variável de ambiente (mais seguro)
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.error("RESEND_API_KEY não configurada")
      return NextResponse.json({ error: "Configuração de email não encontrada" }, { status: 500 })
    }

    const emailData = {
      from: "contato@asielsax.com",
      to: ["asielsax@gmail.com"],
      subject: `Nova mensagem de ${name} - Site Asiel`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px;">
          <div style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px; text-align: center;">Nova mensagem do seu site!</h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h3 style="color: #495057; margin-bottom: 15px;">Informações do contato:</h3>
              <p style="margin: 8px 0;"><strong>Nome:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
            </div>
            
            <div style="background: #e9ecef; padding: 20px; border-radius: 6px;">
              <h3 style="color: #495057; margin-bottom: 15px;">Mensagem:</h3>
              <p style="line-height: 1.6; color: #333;">${message}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
              <p style="color: #6c757d; font-size: 14px;">Mensagem enviada através do site asielsax.com</p>
            </div>
          </div>
        </div>
      `,
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify(emailData),
    })

    if (response.ok) {
      return NextResponse.json(
        { message: "Mensagem enviada com sucesso! Entrarei em contato em breve." },
        { status: 200 },
      )
    } else {
      const errorData = await response.json()
      console.error("Erro do Resend:", errorData)
      return NextResponse.json({ error: "Erro ao enviar mensagem. Tente novamente." }, { status: 500 })
    }
  } catch (error) {
    console.error("Erro no servidor:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
