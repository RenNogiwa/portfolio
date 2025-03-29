export async function onRequestPost(context: any) {
  try {
    const data = await context.request.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, error: "入力が足りません。" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log("受信:", name, email, message);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ success: false, error: "サーバーエラーが発生しました。" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
} 