<script lang="ts">
  import { Input } from '$lib/components/ui/input';
  import { Button } from '$lib/components/ui/button';
  import { enhance } from '$app/forms';
</script>

<h1>Login user</h1>

<form
  method="POST"
  action="/login"
  use:enhance
  class="w-full max-w-80 space-y-4 rounded-lg border border-gray-200 p-4"
>
  <Input type="email" placeholder="email" name="email" id="email" />
  <Input type="password" placeholder="password" name="password" id="password" />
  <Button type="submit" class="w-full">Login</Button>
</form>
