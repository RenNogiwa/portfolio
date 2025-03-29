/// <reference types="@cloudflare/workers-types" />

interface Env {
  // Add your environment variables here
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// CORSヘッダーを設定する関数
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // OPTIONSリクエストの処理
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: corsHeaders,
      });
    }

    // GETリクエストの処理
    if (request.method === 'GET') {
      return new Response(JSON.stringify({ 
        success: true,
        message: "API is running" 
      }), {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        },
      });
    }

    // POSTリクエストの処理
    if (request.method === 'POST') {
      try {
        // リクエストの内容をログに出力
        console.log('Request received:', request.method, request.url);
        
        // リクエストボディの取得を試みる
        let data: ContactFormData;
        try {
          data = await request.json() as ContactFormData;
          console.log('Parsed data:', data);
        } catch (parseError) {
          console.error('JSON parse error:', parseError);
          return new Response(JSON.stringify({ 
            success: false, 
            error: "リクエストの形式が正しくありません。" 
          }), {
            status: 400,
            headers: {
              ...corsHeaders,
              'Content-Type': 'application/json'
            },
          });
        }

        const { name, email, message } = data;

        // バリデーション
        if (!name || !email || !message) {
          console.log('Validation failed:', { name, email, message });
          return new Response(JSON.stringify({ 
            success: false, 
            error: "入力が足りません。" 
          }), {
            status: 400,
            headers: {
              ...corsHeaders,
              'Content-Type': 'application/json'
            },
          });
        }

        console.log("受信:", { name, email, message });

        // 成功レスポンス
        return new Response(JSON.stringify({ 
          success: true,
          message: "送信が完了しました。" 
        }), {
          status: 200,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json'
          },
        });
      } catch (error) {
        console.error('Unexpected error:', error);
        return new Response(JSON.stringify({ 
          success: false, 
          error: "サーバーエラーが発生しました。",
          details: error instanceof Error ? error.message : "不明なエラー"
        }), {
          status: 500,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json'
          },
        });
      }
    }

    // その他のメソッドの処理
    return new Response(JSON.stringify({ 
      success: false, 
      error: "Method not allowed" 
    }), {
      status: 405,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      },
    });
  }
}; 