<script>
const preloader = document.querySelector(&quot;.preloader&quot;);
const preloaderDuration = 1000;

const hidePreloader = () =&gt; {
    setTimeout(() =&gt; {
        preloader.classList.add(&quot;hide&quot;);
    }, preloaderDuration);
}

window.addEventListener(&quot;load&quot;, hidePreloader);
</script>
