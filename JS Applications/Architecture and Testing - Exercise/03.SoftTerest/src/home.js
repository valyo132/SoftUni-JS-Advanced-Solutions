const homeSection = document.querySelectorAll('main > div')[0];
let context = null;

export function showHomeView(ctx){
    context = ctx;
    ctx.render(homeSection);
}