import { Btnsend } from "../Buttons/Btnsend"
export function Agenda() {
    return (
        <>
            <form>
                <div className="row">
                    <div className="col">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">@</span>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">@</span>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">@</span>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">@</span>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">@</span>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Btnsend />
                    </div>
                </div>
            </form>
        </>
    )
}