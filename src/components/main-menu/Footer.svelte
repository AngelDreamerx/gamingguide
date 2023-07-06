<script>
  import { displayImpressum } from 'src/lib/stores';
  const handleClick = () => {
    displayImpressum.set(true);
  };
</script>

<footer class="w-full flex mt-auto justify-end gap-12 p-8 pr-16 text-white">

    <button on:click={handleClick}>Impressum</button>
</footer>