        let tell = document.querySelector('.tel');
        let number = document.querySelector('.num');

        tell.addEventListener('click', () =>{
            tell.style.display = 'none'
            number.style.display = 'block'
        })
        // Selecione cada letra individualmente e adicione a classe 'animated-letter'
        const letters = document.querySelectorAll('.animated-text span');
        letters.forEach((letter, index) => {
            letter.classList.add('animated-letter');
            // Adicione um atraso para que a animação de cada letra comece em um momento diferente
            letter.style.animationDelay = `${index * 0.5}s`;
        });    