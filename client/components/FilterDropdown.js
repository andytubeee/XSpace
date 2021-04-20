import { useState } from 'react'

export default function FilterDropdown() {
    const filterOptions

    return (
        <div class="form-group d-inline">
            <label for="filter-selector">Filter</label>
            <select class="form-control" id="filter-selector"
                disabled={!ready}


            // onClick={() => {
            //   Swal.fire({
            //     icon: "warning",
            //     title: "Unavailable!",
            //     text: "Feature in development, stay tuned!",
            //   });
            // }}
            >
                <option value="Random" onClick={() => alert('Random clicked')}>Random</option>
                <option value="Mission ID">Mission ID</option>
                <option value="Launch Date">Launch Date</option>
                <option value="Launch Success">Launch Success</option>
                <option value="Mission Name">Mission Name</option>
            </select>
        </div>
    )
}