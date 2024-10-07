<script lang="ts">
  import { Button } from '$lib/components/ui/button';
</script>

<div class="space-y-4 p-10">
  <h1>this is the dashboard</h1>

  <form method="POST">
    <Button formaction="/logout" type="submit" role="button">log out</Button>
  </form>
</div>
