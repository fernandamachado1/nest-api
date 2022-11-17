export interface CreateTaskDto {
    item: string,
    checked: boolean,
    checkedDate: Date,
    user_id?: string
}
