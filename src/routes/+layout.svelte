<script>
  import '../app.css';
</script>

<div class="relative flex h-screen flex-col items-center justify-center gap-2">
  <a href="/" class="absolute left-8 top-8 hover:text-gray-500"
    >&#x2190; back home</a
  >
  <slot></slot>
</div>
