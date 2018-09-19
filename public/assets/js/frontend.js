
$(function () {
    let serviceSelected;
    $('#date-input').datepicker();
    $('#submit-date').on('click', function () {
        let date = $('#date-input').val()
        let momentDate = moment(date);
        console.log(momentDate);
        $.get('/services/' + serviceSelected, (data => {
            console.log('data', data)
            let timesList = $("<ul>");
            $('#available-times').append('<h3>' + 'Available Times' + '</h3>');
            data.forEach(item => {
                let momentObj = moment(item);
                if (momentObj.isSame(momentDate, 'day')) {
                    let newTime = $("<li>").append(item);
                    timesList.append(newTime);
                }
            })
            $('#available-times').append(timesList);
        }))
    })
    $('.service-select').on('click', function () {
        serviceSelected = $(this).attr('data-name');
        //     $.get('/services/' + serviceSelected, (data => {
        //         let timesList = $("<ul>");
        //         $('#available-times').append('<h3>' + 'Available Times' + '</h3>');
        //         data.forEach(item => {
        //             if (item.isSame(momentDate, 'day')) {
        //                 let newTime = $("<li>").append(item);
        //                 timesList.append(newTime);
        //             }
        //         })
        //         $('#available-times').append(timesList);
        // console.log(data);
    });
})

