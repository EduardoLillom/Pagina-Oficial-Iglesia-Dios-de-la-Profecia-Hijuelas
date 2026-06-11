// src/pages/api/admin/post.ts
import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const action = formData.get('_action');

  // Obtener sesión del usuario para seguridad
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return new Response("No autorizado", { status: 401 });

  switch (action) {
    case 'create':
      const { error: createErr } = await supabase.from('posts').insert([{
        title: formData.get('title'),
        type: formData.get('type'),
        summary: formData.get('summary'),
        content: formData.get('content'),
        is_active: formData.get('is_active') === 'on',
        // ... otros campos
      }]);
      if (createErr) return new Response(createErr.message, { status: 500 });
      break;

    case 'delete':
      const { error: delErr } = await supabase.from('posts').delete().eq('id', formData.get('id'));
      if (delErr) return new Response(delErr.message, { status: 500 });
      break;
  }

  return redirect('/admin/contenido-destacado');
};