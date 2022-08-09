
const texts = {tutorial:
        {
        hash: 'instrukcja',
        title: 'Instrukcja rejestracji',
        copy: 'In euismod ligula nec rutrum gravida. Aenean' +
            ' tincidunt diam ut neque vestibulum, ac aliquet nisl accumsan. Phasellus in urna nec ante egestas tempus. Vivamus tortor libero, tincidunt eget vulputate eu, accumsan consectetur lacus. Morbi cursus lacus sollicitudin urna condimentum, ut congue tellus feugiat. Phasellus suscipit augue at eros posuere.'
    },
frameOne : {
        title:'Lorem i psum',
    subtitle:'Dolor psik amant',
    copy:'Filmy powstały w oparciu o bieżące przepisy prawa polskiego w związku z sytuacją na Ukrainie, by służyć pomocą obywatelom Ukrainy szukającym wsparcia.'
    },
    
    frameTwo : {
        title:'Sed elit ut labor',
        subtitle:'Dolore et labore',
        copy:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
    },
    
    setSubtitle: {
        title: 'Jak włączyć polskie napisy w filmach',
        subtitle:'',
        copy:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
    },
    
    licence: {
    title:'Licencja',
        subtitle:'warunki użytkowania filmów',
        copy:'\n' +
            '\n' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum ipsum ut velit cursus tempus non nec nunc. Quisque fermentum metus eget pharetra sagittis. Aenean tempor vitae magna quis rutrum. Duis at pulvinar nulla, ut faucibus lorem. Aliquam erat volutpat. In eget varius nulla. Fusce ullamcorper elit erat, in varius sapien consequat vel. Suspendisse porta eu augue sed finibus. Duis ut odio fermentum, laoreet eros sed, sagittis ante. Duis dapibus luctus blandit.\n' +
            '\n' +
            'Aliquam fermentum erat ac tortor molestie feugiat. Duis porttitor magna a imperdiet fermentum. Vivamus finibus ex nec libero maximus scelerisque. Nam fringilla, est in varius ultricies, odio risus fringilla lacus, a elementum mi metus ac quam. Nullam eget nunc erat. Nunc luctus euismod lacus, quis convallis urna commodo et. Suspendisse eu arcu volutpat, interdum quam eu, tincidunt purus. Phasellus pellentesque mattis elit, et porta nibh fermentum et.\n' +
            '\n' +
            'Curabitur volutpat metus sit amet pulvinar fermentum. Proin eleifend interdum rhoncus. Sed ac finibus erat. Nullam aliquet quis lectus mollis lobortis. Duis finibus elit et tortor euismod malesuada. Integer ullamcorper, metus nec laoreet fermentum, nibh mi ornare purus, ut dapibus risus erat in lorem. Proin sollicitudin suscipit accumsan. Sed posuere, nunc eu aliquet sodales, elit urna eleifend lorem, ut consectetur nisl est eget nisi. Donec gravida leo enim, vitae volutpat erat elementum id. Cras nulla ipsum, imperdiet non ligula et, viverra mattis justo. Duis nec mattis nunc. Nunc eget elit lacus. Quisque consectetur et turpis id accumsan. Vestibulum et mauris fringilla justo condimentum bibendum eu dignissim leo.\n' +
            '\n' +
            'Aliquam rhoncus, purus eget bibendum blandit, dolor metus sodales enim, a luctus leo lectus sit amet libero. Vestibulum vitae ullamcorper mauris, vel commodo tortor. Sed libero diam, efficitur non accumsan vel, dignissim eu urna. Duis semper erat id scelerisque dictum. Vestibulum placerat fringilla massa, in placerat justo condimentum et. Nam venenatis odio vitae sem laoreet, ultricies sagittis dui aliquet. Cras faucibus porta justo, id varius tellus vulputate id. Proin ac mi at nunc varius consequat. Morbi suscipit semper tempus. Vestibulum a lectus vitae urna ullamcorper accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In in sapien convallis, euismod lectus nec, bibendum metus. Aenean in egestas ligula. Nullam cursus massa id rhoncus consequat. Fusce viverra aliquet elit, ut elementum ipsum gravida eu.\n' +
            '\n' +
            'Aliquam cursus egestas lectus in condimentum. Morbi nisl enim, porta ut gravida convallis, feugiat quis arcu. Donec euismod vel massa sit amet placerat. Ut convallis quam consectetur libero varius blandit. Nam porta cursus nisl. Ut magna est, elementum pharetra ante vel, vestibulum ornare massa. Nulla et congue nunc. Curabitur vitae justo nisi. \n' +
            '\n' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum ipsum ut velit cursus tempus non nec nunc. Quisque fermentum metus eget pharetra sagittis. Aenean tempor vitae magna quis rutrum. Duis at pulvinar nulla, ut faucibus lorem. Aliquam erat volutpat. In eget varius nulla. Fusce ullamcorper elit erat, in varius sapien consequat vel. Suspendisse porta eu augue sed finibus. Duis ut odio fermentum, laoreet eros sed, sagittis ante. Duis dapibus luctus blandit.\n' +
            '\n' +
            'Aliquam fermentum erat ac tortor molestie feugiat. Duis porttitor magna a imperdiet fermentum. Vivamus finibus ex nec libero maximus scelerisque. Nam fringilla, est in varius ultricies, odio risus fringilla lacus, a elementum mi metus ac quam. Nullam eget nunc erat. Nunc luctus euismod lacus, quis convallis urna commodo et. Suspendisse eu arcu volutpat, interdum quam eu, tincidunt purus. Phasellus pellentesque mattis elit, et porta nibh fermentum et.\n' +
            '\n' +
            'Curabitur volutpat metus sit amet pulvinar fermentum. Proin eleifend interdum rhoncus. Sed ac finibus erat. Nullam aliquet quis lectus mollis lobortis. Duis finibus elit et tortor euismod malesuada. Integer ullamcorper, metus nec laoreet fermentum, nibh mi ornare purus, ut dapibus risus erat in lorem. Proin sollicitudin suscipit accumsan. Sed posuere, nunc eu aliquet sodales, elit urna eleifend lorem, ut consectetur nisl est eget nisi. Donec gravida leo enim, vitae volutpat erat elementum id. Cras nulla ipsum, imperdiet non ligula et, viverra mattis justo. Duis nec mattis nunc. Nunc eget elit lacus. Quisque consectetur et turpis id accumsan. Vestibulum et mauris fringilla justo condimentum bibendum eu dignissim leo.\n' +
            '\n' +
            'Aliquam rhoncus, purus eget bibendum blandit, dolor metus sodales enim, a luctus leo lectus sit amet libero. Vestibulum vitae ullamcorper mauris, vel commodo tortor. Sed libero diam, efficitur non accumsan vel, dignissim eu urna. Duis semper erat id scelerisque dictum. Vestibulum placerat fringilla massa, in placerat justo condimentum et. Nam venenatis odio vitae sem laoreet, ultricies sagittis dui aliquet. Cras faucibus porta justo, id varius tellus vulputate id. Proin ac mi at nunc varius consequat. Morbi suscipit semper tempus. Vestibulum a lectus vitae urna ullamcorper accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In in sapien convallis, euismod lectus nec, bibendum metus. Aenean in egestas ligula. Nullam cursus massa id rhoncus consequat. Fusce viverra aliquet elit, ut elementum ipsum gravida eu.\n' +
            '\n' +
            'Aliquam cursus egestas lectus in condimentum. Morbi nisl enim, porta ut gravida convallis, feugiat quis arcu. Donec euismod vel massa sit amet placerat. Ut convallis quam consectetur libero varius blandit. Nam porta cursus nisl. Ut magna est, elementum pharetra ante vel, vestibulum ornare massa. Nulla et congue nunc. Curabitur vitae justo nisi. \n' +
            '\n' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum ipsum ut velit cursus tempus non nec nunc. Quisque fermentum metus eget pharetra sagittis. Aenean tempor vitae magna quis rutrum. Duis at pulvinar nulla, ut faucibus lorem. Aliquam erat volutpat. In eget varius nulla. Fusce ullamcorper elit erat, in varius sapien consequat vel. Suspendisse porta eu augue sed finibus. Duis ut odio fermentum, laoreet eros sed, sagittis ante. Duis dapibus luctus blandit.\n' +
            '\n' +
            'Aliquam fermentum erat ac tortor molestie feugiat. Duis porttitor magna a imperdiet fermentum. Vivamus finibus ex nec libero maximus scelerisque. Nam fringilla, est in varius ultricies, odio risus fringilla lacus, a elementum mi metus ac quam. Nullam eget nunc erat. Nunc luctus euismod lacus, quis convallis urna commodo et. Suspendisse eu arcu volutpat, interdum quam eu, tincidunt purus. Phasellus pellentesque mattis elit, et porta nibh fermentum et.\n' +
            '\n' +
            'Curabitur volutpat metus sit amet pulvinar fermentum. Proin eleifend interdum rhoncus. Sed ac finibus erat. Nullam aliquet quis lectus mollis lobortis. Duis finibus elit et tortor euismod malesuada. Integer ullamcorper, metus nec laoreet fermentum, nibh mi ornare purus, ut dapibus risus erat in lorem. Proin sollicitudin suscipit accumsan. Sed posuere, nunc eu aliquet sodales, elit urna eleifend lorem, ut consectetur nisl est eget nisi. Donec gravida leo enim, vitae volutpat erat elementum id. Cras nulla ipsum, imperdiet non ligula et, viverra mattis justo. Duis nec mattis nunc. Nunc eget elit lacus. Quisque consectetur et turpis id accumsan. Vestibulum et mauris fringilla justo condimentum bibendum eu dignissim leo.\n' +
            '\n' +
            'Aliquam rhoncus, purus eget bibendum blandit, dolor metus sodales enim, a luctus leo lectus sit amet libero. Vestibulum vitae ullamcorper mauris, vel commodo tortor. Sed libero diam, efficitur non accumsan vel, dignissim eu urna. Duis semper erat id scelerisque dictum. Vestibulum placerat fringilla massa, in placerat justo condimentum et. Nam venenatis odio vitae sem laoreet, ultricies sagittis dui aliquet. Cras faucibus porta justo, id varius tellus vulputate id. Proin ac mi at nunc varius consequat. Morbi suscipit semper tempus. Vestibulum a lectus vitae urna ullamcorper accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In in sapien convallis, euismod lectus nec, bibendum metus. Aenean in egestas ligula. Nullam cursus massa id rhoncus consequat. Fusce viverra aliquet elit, ut elementum ipsum gravida eu.\n' +
            '\n' +
            'Aliquam cursus egestas lectus in condimentum. Morbi nisl enim, porta ut gravida convallis, feugiat quis arcu. Donec euismod vel massa sit amet placerat. Ut convallis quam consectetur libero varius blandit. Nam porta cursus nisl. Ut magna est, elementum pharetra ante vel, vestibulum ornare massa. Nulla et congue nunc. Curabitur vitae justo nisi. ',
    }
};


export default texts;


