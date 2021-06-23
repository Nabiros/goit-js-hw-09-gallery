const galleryItems = [
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
    },
];

const galleryRef = document.querySelector('.js-gallery');
const lightBoxRef = document.querySelector('.js-lightbox');
const lightboxImageRef = document.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector(
    'button[data-action="close-lightbox"]',
);
const lightboxContentRef = document.querySelector('.lightbox__content');



const createGalleryRef = item => {


    const galleryItemRef = document.createElement('li');
    galleryItemRef.classList.add('gallery__item');

    const galleryLinkRef = document.createElement('a');
    galleryLinkRef.classList.add('gallery__link');
    galleryLinkRef.setAttribute('href', item.original);

    const galleryImgRef = document.createElement('img');
    galleryImgRef.classList.add('gallery__image');
    galleryImgRef.setAttribute('src', item.preview);
    galleryImgRef.setAttribute('data-source', item.original);
    galleryImgRef.setAttribute('alt', item.description);

    galleryLinkRef.appendChild(galleryImgRef);
    galleryItemRef.appendChild(galleryLinkRef);
    galleryRef.appendChild(galleryItemRef);

    return galleryItemRef;
};

const galleryItemsRef = galleryItems.map(item => createGalleryRef(item));

galleryRef.append(...galleryItemsRef);

galleryRef.addEventListener('click', onOpenModal);
closeModalBtn.addEventListener('click', onCloseModal);
// lightboxContentRef.addEventListener('click', onOverlayClick);


function onArrowRight(event) {
    if (event.code === 'ArrowRight') {
        onRightNext();
    }
}

function onArrowLeft(event) {
    if (event.code === 'ArrowLeft') {
        onLeftNext();
    }
}

// function onOverlayClick(event) {
//     if (event.target === event.currentTarget) {
//         onCloseModal();
//     }
// }

function onPressEsc(event) {
    if (event.code === 'Escape') {
        onCloseModal();
    }
}

function onRightNext() {
    const activeImage = galleryItems.findIndex(
        img => img.original === lightboxImageRef.src,
    );

    let index = activeImage ? activeImage : 0;

    if (index < galleryItems.length - 1) {
        index += 1;
    } else {
        index = 0;
    }

    lightboxImageRef.src = galleryItems[index].original;
    lightboxImageRef.alt = galleryItems[index].alt;
}

function onLeftNext() {
    const activeImage = galleryItems.findIndex(
        img => img.original === lightboxImageRef.src,
    );

    let index = activeImage ? activeImage : galleryItems.length - 1;

    if (index > 0) {
        index -= 1;
    } else {
        index = galleryItems.length - 1;
    }

    lightboxImageRef.src = galleryItems[index].original;
    lightboxImageRef.alt = galleryItems[index].alt;
}

function onOpenModal(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
        return;
    }

    window.addEventListener('keydown', onPressEsc);
    lightBoxRef.classList.add('is-open');
    lightboxImageRef.src = event.target.getAttribute('data-source');
    lightboxImageRef.alt = event.target.alt;
    galleryRef.addEventListener('keydown', onArrowRight);
    galleryRef.addEventListener('keydown', onArrowLeft);
}

function onCloseModal() {
    window.removeEventListener('keydown', onPressEsc);
    lightBoxRef.classList.remove('is-open');
    lightboxImageRef.src = '';
    lightboxImageRef.alt = '';
    galleryRef.removeEventListener('keydown', onArrowRight);
    galleryRef.removeEventListener('keydown', onArrowLeft);
}